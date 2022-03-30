/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { StubTileContract } from "./StubTileContract";

export class StubTileContractFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<StubTileContract> {
    return super.deploy(overrides || {}) as Promise<StubTileContract>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): StubTileContract {
    return super.attach(address) as StubTileContract;
  }
  connect(signer: Signer): StubTileContractFactory {
    return super.connect(signer) as StubTileContractFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StubTileContract {
    return new Contract(address, _abi, signerOrProvider) as StubTileContract;
  }
}

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "x",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "y",
            type: "uint256",
          },
        ],
        internalType: "struct Coords",
        name: "coords",
        type: "tuple",
      },
    ],
    name: "tileABI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "x",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "y",
            type: "uint256",
          },
        ],
        internalType: "struct Coords",
        name: "coords",
        type: "tuple",
      },
    ],
    name: "tileDescription",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "x",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "y",
            type: "uint256",
          },
        ],
        internalType: "struct Coords",
        name: "coords",
        type: "tuple",
      },
    ],
    name: "tileEmoji",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "x",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "y",
            type: "uint256",
          },
        ],
        internalType: "struct Coords",
        name: "coords",
        type: "tuple",
      },
    ],
    name: "tileName",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610212806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80632f9ca46a146100515780635f71a8b914610099578063986c2854146100c6578063f6bc2b8a14610102575b600080fd5b61008361005f36600461012f565b50604080518082019091526009815268546573742054696c6560b81b602082015290565b6040516100909190610189565b60405180910390f35b6100836100a736600461012f565b506040805180820190915260048152636970667360e01b602082015290565b6100836100d436600461012f565b5060408051808201909152601381527254686973206973206120746573742074696c6560681b602082015290565b61008361011036600461012f565b50604080518082019091526004815263f09f8c8360e01b602082015290565b600060408284031215610140578081fd5b6040516040810181811067ffffffffffffffff8211171561016f57634e487b7160e01b83526041600452602483fd5b604052823581526020928301359281019290925250919050565b6000602080835283518082850152825b818110156101b557858101830151858201604001528201610199565b818111156101c65783604083870101525b50601f01601f191692909201604001939250505056fea26469706673582212205ab442771f64b34ba318cb4e268540f244be267da531c2b953608d43925a545264736f6c63430008040033";
