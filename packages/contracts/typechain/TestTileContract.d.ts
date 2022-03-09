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
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface TestTileContractInterface extends ethers.utils.Interface {
  functions: {
    "logger()": FunctionFragment;
    "test(string)": FunctionFragment;
    "tileABI()": FunctionFragment;
    "tileDescription()": FunctionFragment;
    "tileEmoji()": FunctionFragment;
    "tileName()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "logger", values?: undefined): string;
  encodeFunctionData(functionFragment: "test", values: [string]): string;
  encodeFunctionData(functionFragment: "tileABI", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "tileDescription",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "tileEmoji", values?: undefined): string;
  encodeFunctionData(functionFragment: "tileName", values?: undefined): string;

  decodeFunctionResult(functionFragment: "logger", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "test", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tileABI", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tileDescription",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tileEmoji", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tileName", data: BytesLike): Result;

  events: {};
}

export class TestTileContract extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: TestTileContractInterface;

  functions: {
    logger(overrides?: CallOverrides): Promise<{
      0: string;
      1: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
    }>;

    "logger()"(overrides?: CallOverrides): Promise<{
      0: string;
      1: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
    }>;

    test(inp: string, overrides?: Overrides): Promise<ContractTransaction>;

    "test(string)"(
      inp: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    tileABI(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "tileABI()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    tileDescription(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "tileDescription()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    tileEmoji(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "tileEmoji()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    tileName(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "tileName()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;
  };

  logger(overrides?: CallOverrides): Promise<{
    0: string;
    1: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
  }>;

  "logger()"(overrides?: CallOverrides): Promise<{
    0: string;
    1: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
  }>;

  test(inp: string, overrides?: Overrides): Promise<ContractTransaction>;

  "test(string)"(
    inp: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  tileABI(overrides?: CallOverrides): Promise<string>;

  "tileABI()"(overrides?: CallOverrides): Promise<string>;

  tileDescription(overrides?: CallOverrides): Promise<string>;

  "tileDescription()"(overrides?: CallOverrides): Promise<string>;

  tileEmoji(overrides?: CallOverrides): Promise<string>;

  "tileEmoji()"(overrides?: CallOverrides): Promise<string>;

  tileName(overrides?: CallOverrides): Promise<string>;

  "tileName()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    logger(overrides?: CallOverrides): Promise<{
      0: string;
      1: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
    }>;

    "logger()"(overrides?: CallOverrides): Promise<{
      0: string;
      1: { x: BigNumber; y: BigNumber; 0: BigNumber; 1: BigNumber };
    }>;

    test(inp: string, overrides?: CallOverrides): Promise<void>;

    "test(string)"(inp: string, overrides?: CallOverrides): Promise<void>;

    tileABI(overrides?: CallOverrides): Promise<string>;

    "tileABI()"(overrides?: CallOverrides): Promise<string>;

    tileDescription(overrides?: CallOverrides): Promise<string>;

    "tileDescription()"(overrides?: CallOverrides): Promise<string>;

    tileEmoji(overrides?: CallOverrides): Promise<string>;

    "tileEmoji()"(overrides?: CallOverrides): Promise<string>;

    tileName(overrides?: CallOverrides): Promise<string>;

    "tileName()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    logger(overrides?: CallOverrides): Promise<BigNumber>;

    "logger()"(overrides?: CallOverrides): Promise<BigNumber>;

    test(inp: string, overrides?: Overrides): Promise<BigNumber>;

    "test(string)"(inp: string, overrides?: Overrides): Promise<BigNumber>;

    tileABI(overrides?: CallOverrides): Promise<BigNumber>;

    "tileABI()"(overrides?: CallOverrides): Promise<BigNumber>;

    tileDescription(overrides?: CallOverrides): Promise<BigNumber>;

    "tileDescription()"(overrides?: CallOverrides): Promise<BigNumber>;

    tileEmoji(overrides?: CallOverrides): Promise<BigNumber>;

    "tileEmoji()"(overrides?: CallOverrides): Promise<BigNumber>;

    tileName(overrides?: CallOverrides): Promise<BigNumber>;

    "tileName()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    logger(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "logger()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    test(inp: string, overrides?: Overrides): Promise<PopulatedTransaction>;

    "test(string)"(
      inp: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    tileABI(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "tileABI()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tileDescription(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "tileDescription()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tileEmoji(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "tileEmoji()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tileName(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "tileName()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
