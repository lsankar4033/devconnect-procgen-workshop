/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface TinyWorldStorageInterface extends ethers.utils.Interface {
  functions: {
    "cachedTiles(uint256,uint256)": FunctionFragment;
    "getCachedTile(tuple)": FunctionFragment;
    "perlinMax()": FunctionFragment;
    "playerInited(address)": FunctionFragment;
    "playerLocation(address)": FunctionFragment;
    "seed()": FunctionFragment;
    "vecs(uint256,uint256)": FunctionFragment;
    "vecsDenom()": FunctionFragment;
    "worldScale()": FunctionFragment;
    "worldWidth()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "cachedTiles",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getCachedTile",
    values: [{ x: BigNumberish; y: BigNumberish }]
  ): string;
  encodeFunctionData(functionFragment: "perlinMax", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "playerInited",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "playerLocation",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "seed", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "vecs",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "vecsDenom", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "worldScale",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "worldWidth",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "cachedTiles",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCachedTile",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "perlinMax", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "playerInited",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "playerLocation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "seed", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "vecs", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "vecsDenom", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "worldScale", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "worldWidth", data: BytesLike): Result;

  events: {};
}

export class TinyWorldStorage extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: TinyWorldStorageInterface;

  functions: {
    cachedTiles(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      coords: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
      raritySeed: BigNumber;
      currentTileType: number;
      0: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
      1: BigNumber;
      2: number;
    }>;

    "cachedTiles(uint256,uint256)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      coords: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
      raritySeed: BigNumber;
      currentTileType: number;
      0: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
      1: BigNumber;
      2: number;
    }>;

    getCachedTile(
      coords: { x: BigNumberish; y: BigNumberish },
      overrides?: CallOverrides
    ): Promise<{
      0: {
        coords: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
        perlin: [BigNumber, BigNumber];
        raritySeed: BigNumber;
        currentTileType: number;
        0: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
        1: [BigNumber, BigNumber];
        2: BigNumber;
        3: number;
      };
    }>;

    "getCachedTile(tuple)"(
      coords: { x: BigNumberish; y: BigNumberish },
      overrides?: CallOverrides
    ): Promise<{
      0: {
        coords: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
        perlin: [BigNumber, BigNumber];
        raritySeed: BigNumber;
        currentTileType: number;
        0: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
        1: [BigNumber, BigNumber];
        2: BigNumber;
        3: number;
      };
    }>;

    perlinMax(overrides?: CallOverrides): Promise<{
      0: number;
    }>;

    "perlinMax()"(overrides?: CallOverrides): Promise<{
      0: number;
    }>;

    playerInited(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "playerInited(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    playerLocation(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      x: BigNumber;
      y: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    "playerLocation(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      x: BigNumber;
      y: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    seed(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "seed()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    vecs(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    "vecs(uint256,uint256)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    vecsDenom(overrides?: CallOverrides): Promise<{
      0: number;
    }>;

    "vecsDenom()"(overrides?: CallOverrides): Promise<{
      0: number;
    }>;

    worldScale(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "worldScale()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    worldWidth(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "worldWidth()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;
  };

  cachedTiles(
    arg0: BigNumberish,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    coords: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
    raritySeed: BigNumber;
    currentTileType: number;
    0: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
    1: BigNumber;
    2: number;
  }>;

  "cachedTiles(uint256,uint256)"(
    arg0: BigNumberish,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    coords: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
    raritySeed: BigNumber;
    currentTileType: number;
    0: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
    1: BigNumber;
    2: number;
  }>;

  getCachedTile(
    coords: { x: BigNumberish; y: BigNumberish },
    overrides?: CallOverrides
  ): Promise<{
    coords: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
    perlin: [BigNumber, BigNumber];
    raritySeed: BigNumber;
    currentTileType: number;
    0: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
    1: [BigNumber, BigNumber];
    2: BigNumber;
    3: number;
  }>;

  "getCachedTile(tuple)"(
    coords: { x: BigNumberish; y: BigNumberish },
    overrides?: CallOverrides
  ): Promise<{
    coords: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
    perlin: [BigNumber, BigNumber];
    raritySeed: BigNumber;
    currentTileType: number;
    0: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
    1: [BigNumber, BigNumber];
    2: BigNumber;
    3: number;
  }>;

  perlinMax(overrides?: CallOverrides): Promise<number>;

  "perlinMax()"(overrides?: CallOverrides): Promise<number>;

  playerInited(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  "playerInited(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  playerLocation(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<{
    x: BigNumber;
    y: BigNumber;
    0: BigNumber;
    1: BigNumber;
  }>;

  "playerLocation(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<{
    x: BigNumber;
    y: BigNumber;
    0: BigNumber;
    1: BigNumber;
  }>;

  seed(overrides?: CallOverrides): Promise<BigNumber>;

  "seed()"(overrides?: CallOverrides): Promise<BigNumber>;

  vecs(
    arg0: BigNumberish,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  "vecs(uint256,uint256)"(
    arg0: BigNumberish,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  vecsDenom(overrides?: CallOverrides): Promise<number>;

  "vecsDenom()"(overrides?: CallOverrides): Promise<number>;

  worldScale(overrides?: CallOverrides): Promise<BigNumber>;

  "worldScale()"(overrides?: CallOverrides): Promise<BigNumber>;

  worldWidth(overrides?: CallOverrides): Promise<BigNumber>;

  "worldWidth()"(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    cachedTiles(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      coords: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
      raritySeed: BigNumber;
      currentTileType: number;
      0: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
      1: BigNumber;
      2: number;
    }>;

    "cachedTiles(uint256,uint256)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      coords: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
      raritySeed: BigNumber;
      currentTileType: number;
      0: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
      1: BigNumber;
      2: number;
    }>;

    getCachedTile(
      coords: { x: BigNumberish; y: BigNumberish },
      overrides?: CallOverrides
    ): Promise<{
      coords: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
      perlin: [BigNumber, BigNumber];
      raritySeed: BigNumber;
      currentTileType: number;
      0: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
      1: [BigNumber, BigNumber];
      2: BigNumber;
      3: number;
    }>;

    "getCachedTile(tuple)"(
      coords: { x: BigNumberish; y: BigNumberish },
      overrides?: CallOverrides
    ): Promise<{
      coords: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
      perlin: [BigNumber, BigNumber];
      raritySeed: BigNumber;
      currentTileType: number;
      0: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
      1: [BigNumber, BigNumber];
      2: BigNumber;
      3: number;
    }>;

    perlinMax(overrides?: CallOverrides): Promise<number>;

    "perlinMax()"(overrides?: CallOverrides): Promise<number>;

    playerInited(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    "playerInited(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    playerLocation(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      x: BigNumber;
      y: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    "playerLocation(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      x: BigNumber;
      y: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    seed(overrides?: CallOverrides): Promise<BigNumber>;

    "seed()"(overrides?: CallOverrides): Promise<BigNumber>;

    vecs(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    "vecs(uint256,uint256)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    vecsDenom(overrides?: CallOverrides): Promise<number>;

    "vecsDenom()"(overrides?: CallOverrides): Promise<number>;

    worldScale(overrides?: CallOverrides): Promise<BigNumber>;

    "worldScale()"(overrides?: CallOverrides): Promise<BigNumber>;

    worldWidth(overrides?: CallOverrides): Promise<BigNumber>;

    "worldWidth()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    cachedTiles(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "cachedTiles(uint256,uint256)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCachedTile(
      coords: { x: BigNumberish; y: BigNumberish },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getCachedTile(tuple)"(
      coords: { x: BigNumberish; y: BigNumberish },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    perlinMax(overrides?: CallOverrides): Promise<BigNumber>;

    "perlinMax()"(overrides?: CallOverrides): Promise<BigNumber>;

    playerInited(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "playerInited(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    playerLocation(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "playerLocation(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    seed(overrides?: CallOverrides): Promise<BigNumber>;

    "seed()"(overrides?: CallOverrides): Promise<BigNumber>;

    vecs(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "vecs(uint256,uint256)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    vecsDenom(overrides?: CallOverrides): Promise<BigNumber>;

    "vecsDenom()"(overrides?: CallOverrides): Promise<BigNumber>;

    worldScale(overrides?: CallOverrides): Promise<BigNumber>;

    "worldScale()"(overrides?: CallOverrides): Promise<BigNumber>;

    worldWidth(overrides?: CallOverrides): Promise<BigNumber>;

    "worldWidth()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    cachedTiles(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "cachedTiles(uint256,uint256)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCachedTile(
      coords: { x: BigNumberish; y: BigNumberish },
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getCachedTile(tuple)"(
      coords: { x: BigNumberish; y: BigNumberish },
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    perlinMax(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "perlinMax()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    playerInited(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "playerInited(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    playerLocation(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "playerLocation(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    seed(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "seed()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    vecs(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "vecs(uint256,uint256)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    vecsDenom(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "vecsDenom()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    worldScale(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "worldScale()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    worldWidth(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "worldWidth()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
