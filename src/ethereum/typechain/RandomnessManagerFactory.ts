/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts';

import { RandomnessManager } from './RandomnessManager';

export class RandomnessManagerFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<RandomnessManager> {
    return super.deploy(overrides || {}) as Promise<RandomnessManager>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): RandomnessManager {
    return super.attach(address) as RandomnessManager;
  }
  connect(signer: Signer): RandomnessManagerFactory {
    return super.connect(signer) as RandomnessManagerFactory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): RandomnessManager {
    return new Contract(address, _abi, signerOrProvider) as RandomnessManager;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_numberOfBytes',
        type: 'uint256',
      },
    ],
    name: 'getRandomBytes',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getRandomBytes32',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const _bytecode =
  '0x608060405234801561001057600080fd5b50610229806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063ae6dc6fb1461003b578063f5b0fe54146100cd575b600080fd5b6100586004803603602081101561005157600080fd5b50356100e7565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561009257818101518382015260200161007a565b50505050905090810190601f1680156100bf5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6100d5610190565b60408051918252519081900360200190f35b60608060005b8381101561018957816100fe610190565b6040516020018083805190602001908083835b6020831061014e57805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101610111565b51815160209384036101000a6000190180199092169116179052920193845250604080518085038152939091019052509250506001016100ed565b5092915050565b60008061019b6101ea565b905060005481146101af5760008181556001555b505060018054810190819055600054604080516020808201939093528082019390935280518084038201815260609093019052815191012090565b6000194301409056fea2646970667358221220158c21a05b6c6ebada39f570430c0e57caa65b0f25b0ecaa2cb13d112a10a74864736f6c63430007010033';
