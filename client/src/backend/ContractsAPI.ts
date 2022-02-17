import { CORE_CONTRACT_ADDRESS, GETTERS_CONTRACT_ADDRESS } from 'common-contracts';
import {
  ProveTileContractCallArgs,
  TransitionTileContractCallArgs,
  Tile,
  TileType,
  WorldCoords,
  Awaited,
} from 'common-types';
import type { TinyWorld, TinyWorldGetters } from 'common-contracts/typechain';
import {
  ContractCaller,
  EthConnection,
  ethToWei,
  // QueuedTransaction,
  TxExecutor,
} from '@darkforest_eth/network';
import { EventEmitter } from 'events';
import {
  BigNumber as EthersBN,
  ContractFunction /*, ethers, Event, providers*/,
  providers,
} from 'ethers';
import {
  ContractEvent,
  ContractMethodName,
  ContractsAPIEvent,
  SubmittedMovePlayer,
  SubmittedProcessTile,
  SubmittedTx,
  UnconfirmedMovePlayer,
  UnconfirmedProcessTile,
} from '../_types/ContractAPITypes';
import { loadCoreContract, loadGettersContract } from './Blockchain';

export type RawTile = Awaited<ReturnType<TinyWorld['getCachedTile']>>;
export type RawCoords = Awaited<ReturnType<TinyWorld['playerLocation']>>;

export function decodeTile(rawTile: RawTile): Tile {
  return {
    coords: {
      x: rawTile.coords.x.toNumber(),
      y: rawTile.coords.y.toNumber(),
    },
    currentTileType: rawTile.currentTileType,
    perl: [rawTile.perlin[0].toNumber(), rawTile.perlin[1].toNumber()],
    raritySeed: rawTile.raritySeed.toNumber(),
    isPrepped: true,
  };
}

/**
 * Roughly contains methods that map 1:1 with functions that live in the contract. Responsible for
 * reading and writing to and from the blockchain.
 *
 * @todo don't inherit from {@link EventEmitter}. instead use {@link Monomitter}
 */
export class ContractsAPI extends EventEmitter {
  /**
   * Don't allow users to submit txs if balance falls below this amount/
   */
  private static readonly MIN_BALANCE = ethToWei(0.002);

  /**
   * Instrumented {@link ThrottledConcurrentQueue} for blockchain reads.
   */
  private readonly contractCaller: ContractCaller;

  /**
   * Instrumented {@link ThrottledConcurrentQueue} for blockchain writes.
   */
  private readonly txExecutor: TxExecutor | undefined;

  /**
   * Our connection to the blockchain. In charge of low level networking, and also of the burner
   * wallet.
   */
  private ethConnection: EthConnection;

  get coreContract() {
    return this.ethConnection.getContract<TinyWorld>(CORE_CONTRACT_ADDRESS);
  }

  get gettersContract() {
    return this.ethConnection.getContract<TinyWorldGetters>(GETTERS_CONTRACT_ADDRESS);
  }

  public constructor(ethConnection: EthConnection) {
    super();
    this.contractCaller = new ContractCaller();
    this.ethConnection = ethConnection;
    this.txExecutor = new TxExecutor(ethConnection, () => '1');

    this.setupEventListeners();
  }

  public destroy(): void {
    this.removeEventListeners();
  }

  private makeCall<T>(contractViewFunction: ContractFunction<T>, args: unknown[] = []): Promise<T> {
    return this.contractCaller.makeCall(contractViewFunction, args);
  }

  public async setupEventListeners(): Promise<void> {
    const { coreContract } = this;

    const filter = {
      address: coreContract.address,
      topics: [
        [coreContract.filters.TileUpdated(null).topics].map(
          (topicsOrUndefined) => (topicsOrUndefined || [])[0]
        ),
        [coreContract.filters.PlayerUpdated(null).topics].map(
          (topicsOrUndefined) => (topicsOrUndefined || [])[0]
        ),
      ] as Array<string | Array<string>>,
    };

    const eventHandlers = {
      [ContractEvent.TileUpdated]: (rawTile: RawTile) => {
        this.emit(ContractsAPIEvent.TileUpdated, decodeTile(rawTile));
      },
      [ContractEvent.PlayerUpdated]: (coords: RawCoords) => {
        this.emit(ContractsAPIEvent.PlayerUpdated, {
          x: coords.x.toNumber(),
          y: coords.y.toNumber(),
        });
      },
    };

    this.ethConnection.subscribeToContractEvents(coreContract, eventHandlers, filter);
  }

  public removeEventListeners(): void {
    const { coreContract } = this;

    coreContract.removeAllListeners(ContractEvent.TileUpdated);
    coreContract.removeAllListeners(ContractEvent.PlayerUpdated);
  }

  public async getSeed(): Promise<number> {
    return (await this.makeCall<EthersBN>(this.coreContract.seed)).toNumber();
  }

  public async getLocation(): Promise<WorldCoords> {
    if (!this.txExecutor) {
      throw new Error('no signer, cannot execute tx');
    }

    const addr = this.ethConnection.getAddress();

    const rawCoords = await this.makeCall<RawCoords>(this.coreContract.playerLocation, [addr]);
    return {
      x: rawCoords.x.toNumber(),
      y: rawCoords.y.toNumber(),
    };
  }

  public async initPlayerLocation(action: UnconfirmedMovePlayer) {
    if (!this.txExecutor) {
      throw new Error('no signer, cannot execute tx');
    }

    const tx = this.txExecutor.queueTransaction(
      action.actionId,
      this.coreContract,
      action.methodName,
      [action.coords]
    );
    const unminedMovePlayerTx: SubmittedMovePlayer = {
      ...action,
      txHash: (await tx.submitted).hash,
      sentAtTimestamp: Math.floor(Date.now() / 1000),
    };

    return this.waitFor(unminedMovePlayerTx, tx.confirmed);
  }

  public async movePlayer(action: UnconfirmedMovePlayer) {
    if (!this.txExecutor) {
      throw new Error('no signer, cannot execute tx');
    }

    const tx = this.txExecutor.queueTransaction(
      action.actionId,
      this.coreContract,
      action.methodName,
      [action.coords]
    );
    const unminedMovePlayerTx: SubmittedMovePlayer = {
      ...action,
      txHash: (await tx.submitted).hash,
      sentAtTimestamp: Math.floor(Date.now() / 1000),
    };

    return this.waitFor(unminedMovePlayerTx, tx.confirmed);
  }

  public async processTile(action: UnconfirmedProcessTile) {
    if (!this.txExecutor) {
      throw new Error('no signer, cannot execute tx');
    }

    const tx = this.txExecutor.queueTransaction(
      action.actionId,
      this.coreContract,
      action.methodName,
      [action.coords, action.tsbase]
    );
    const unminedProcessTileTx: SubmittedProcessTile = {
      ...action,
      txHash: (await tx.submitted).hash,
      sentAtTimestamp: Math.floor(Date.now() / 1000),
    };

    return this.waitFor(unminedProcessTileTx, tx.confirmed);
  }

  public async getWorldScale(): Promise<number> {
    return (await this.makeCall<EthersBN>(this.coreContract.worldScale)).toNumber();
  }

  public async getWorldWidth(): Promise<number> {
    return (await this.makeCall<EthersBN>(this.coreContract.worldWidth)).toNumber();
  }

  public async getTouchedCoords(): Promise<WorldCoords[]> {
    const touchedRawCoords = await this.makeCall<RawCoords[]>(
      this.coreContract.getTouchedTiles,
      []
    );
    const touchedCoords = touchedRawCoords.map((coords) => {
      return { x: coords.x.toNumber(), y: coords.y.toNumber() };
    });
    return touchedCoords;
  }

  /**
   * Given an unconfirmed (but submitted) transaction, emits the appropriate
   * [[ContractsAPIEvent]].
   */
  public waitFor(submitted: SubmittedTx, receiptPromise: Promise<providers.TransactionReceipt>) {
    this.emit(ContractsAPIEvent.TxSubmitted, submitted);

    return receiptPromise
      .then((receipt) => {
        this.emit(ContractsAPIEvent.TxConfirmed, submitted);
        return receipt;
      })
      .catch((e) => {
        this.emit(ContractsAPIEvent.TxReverted, submitted);
        throw e;
      });
  }
}

export async function makeContractsAPI(ethConnection: EthConnection): Promise<ContractsAPI> {
  // Could turn this into an array and iterate, but I like the explicitness
  await ethConnection.loadContract(CORE_CONTRACT_ADDRESS, loadCoreContract);
  await ethConnection.loadContract(GETTERS_CONTRACT_ADDRESS, loadGettersContract);

  return new ContractsAPI(ethConnection);
}
