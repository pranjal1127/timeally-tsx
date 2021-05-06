/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts';

import type { Incentive } from './Incentive';

export class IncentiveFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<Incentive> {
    return super.deploy(overrides || {}) as Promise<Incentive>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Incentive {
    return super.attach(address) as Incentive;
  }
  connect(signer: Signer): IncentiveFactory {
    return super.connect(signer) as IncentiveFactory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Incentive {
    return new Contract(address, _abi, signerOrProvider) as Incentive;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'Buyer',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'Value',
        type: 'uint256',
      },
    ],
    name: 'SendIncentive',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'Admin',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'addFund',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'dayswappers',
    outputs: [
      {
        internalType: 'contract IDayswappers',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getFund',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'kycDapp',
    outputs: [
      {
        internalType: 'contract IKycDapp',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'nrtManager',
    outputs: [
      {
        internalType: 'contract INRTManager',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'prepaidEs',
    outputs: [
      {
        internalType: 'contract IPrepaidEs',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'randomnessManager',
    outputs: [
      {
        internalType: 'contract RandomnessManager',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
    ],
    name: 'removeAdmin',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_username',
        type: 'bytes32',
      },
    ],
    name: 'resolveAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_username',
        type: 'bytes32',
      },
    ],
    name: 'resolveAddressStrict',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_wallet',
        type: 'address',
      },
    ],
    name: 'resolveUsername',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_wallet',
        type: 'address',
      },
    ],
    name: 'resolveUsernameStrict',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_buyer',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_value',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_incentiveforIntro',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_incentiveforTree',
        type: 'uint256',
      },
    ],
    name: 'sendIncentive',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
    ],
    name: 'setAdmin',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_kycDapp',
        type: 'address',
      },
    ],
    name: 'setKycDapp',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'timeallyClub',
    outputs: [
      {
        internalType: 'contract ITimeAllyClub',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'timeallyManager',
    outputs: [
      {
        internalType: 'contract ITimeAllyManager',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'timeallyPromotionalBucket',
    outputs: [
      {
        internalType: 'contract ITimeAllyPromotionalBucket',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'validatorManager',
    outputs: [
      {
        internalType: 'contract IValidatorManager',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'withdrawFund',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    stateMutability: 'payable',
    type: 'receive',
  },
];

const _bytecode =
  '0x608060405234801561001057600080fd5b50600061001b61007c565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350600380546001600160a01b03191633179055610080565b3390565b610feb8061008f6000396000f3fe6080604052600436106101145760003560e01c80630d541ecb146101205780630df5202f146101655780631785f53c146101965780631d849b30146101cb5780631f70693c146101f5578063208b38041461022857806333b005d01461023d5780635bb752ad1461028457806367b48b18146102bc5780636a14920a146102d1578063704b6c02146102fb578063722d2b3e1461032e5780638da5cb5b146103435780638edd6eb61461035857806398b1a44d1461036d578063a2f09dfa146103a0578063a7017b52146103a8578063bf8c3144146103bd578063dccc1b08146103d2578063e07fa3c1146103e7578063f2fde38b146103ef578063f456795114610422578063fe55bde9146104375761011b565b3661011b57005b600080fd5b34801561012c57600080fd5b506101536004803603602081101561014357600080fd5b50356001600160a01b031661044c565b60408051918252519081900360200190f35b34801561017157600080fd5b5061017a61049c565b604080516001600160a01b039092168252519081900360200190f35b3480156101a257600080fd5b506101c9600480360360208110156101b957600080fd5b50356001600160a01b03166104ba565b005b3480156101d757600080fd5b5061017a600480360360208110156101ee57600080fd5b5035610528565b34801561020157600080fd5b506101536004803603602081101561021857600080fd5b50356001600160a01b031661057b565b34801561023457600080fd5b5061017a6105fe565b34801561024957600080fd5b506102706004803603602081101561026057600080fd5b50356001600160a01b0316610617565b604080519115158252519081900360200190f35b6101c96004803603608081101561029a57600080fd5b506001600160a01b03813516906020810135906040810135906060013561062c565b3480156102c857600080fd5b5061017a610923565b3480156102dd57600080fd5b5061017a600480360360208110156102f457600080fd5b5035610932565b34801561030757600080fd5b506101c96004803603602081101561031e57600080fd5b50356001600160a01b031661097e565b34801561033a57600080fd5b5061017a6109ef565b34801561034f57600080fd5b5061017a610a0d565b34801561036457600080fd5b50610153610a1c565b34801561037957600080fd5b506101c96004803603602081101561039057600080fd5b50356001600160a01b0316610a20565b6101c9610a7e565b3480156103b457600080fd5b5061017a610aca565b3480156103c957600080fd5b5061017a610af3565b3480156103de57600080fd5b5061017a610b13565b6101c9610b2e565b3480156103fb57600080fd5b506101c96004803603602081101561041257600080fd5b50356001600160a01b0316610c0d565b34801561042e57600080fd5b5061017a610c6e565b34801561044357600080fd5b5061017a610c86565b6000806104588361057b565b9050806104965760405162461bcd60e51b815260040180806020018281038252602a815260200180610ec3602a913960400191505060405180910390fd5b92915050565b60006104b56a27292a2fa6a0a720a3a2a960a91b610528565b905090565b6003546001600160a01b03163314610507576040805162461bcd60e51b815260206004820152601e6024820152600080516020610f4f833981519152604482015290519081900360640190fd5b6001600160a01b03166000908152600260205260409020805460ff19169055565b60008061053483610932565b90506001600160a01b0381166104965760405162461bcd60e51b8152600401808060200182810382526026815260200180610f906026913960400191505060405180910390fd5b600154604080516307dc1a4f60e21b81526001600160a01b03848116600483015291516000939290921691631f70693c91602480820192602092909190829003018186803b1580156105cc57600080fd5b505afa1580156105e0573d6000803e3d6000fd5b505050506040513d60208110156105f657600080fd5b505192915050565b60006104b56a444159535741505045525360a81b610528565b60026020526000908152604090205460ff1681565b3360009081526002602052604090205460ff16610690576040805162461bcd60e51b815260206004820152601e60248201527f41646d696e203a20796f7520617265206e6f7420417574686f72697a65640000604482015290519081900360640190fd5b60638211156106d05760405162461bcd60e51b8152600401808060200182810382526021815260200180610f0d6021913960400191505060405180910390fd5b6106d86105fe565b6001600160a01b0316623e8ec46106fa60646106f48787610ca5565b90610d05565b866040518060600160405280606481526020016000815260200160008152506040518463ffffffff1660e01b815260040180836001600160a01b0316815260200182600360200280838360005b8381101561075f578181015183820152602001610747565b50505050905001925050506000604051808303818588803b15801561078357600080fd5b505af1158015610797573d6000803e3d6000fd5b50505050506107a46105fe565b6001600160a01b0316637ef407056107c160646106f48786610ca5565b866040518060600160405280603281526020016000815260200160328152506040518463ffffffff1660e01b815260040180836001600160a01b0316815260200182600360200280838360005b8381101561082657818101518382015260200161080e565b50505050905001925050506000604051808303818588803b15801561084a57600080fd5b505af115801561085e573d6000803e3d6000fd5b505050505061086b6105fe565b6001600160a01b0316639048f53a85856040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050600060405180830381600087803b1580156108c157600080fd5b505af11580156108d5573d6000803e3d6000fd5b5050604080516001600160a01b03881681526020810187905281517f9444cdbd38907ce51c26eff5df15330373f2553049b0223e682c0c9481b1cd7d9450908190039091019150a150505050565b6001546001600160a01b031690565b6001546040805163350a490560e11b81526004810184905290516000926001600160a01b031691636a14920a916024808301926020929190829003018186803b1580156105cc57600080fd5b6003546001600160a01b031633146109cb576040805162461bcd60e51b815260206004820152601e6024820152600080516020610f4f833981519152604482015290519081900360640190fd5b6001600160a01b03166000908152600260205260409020805460ff19166001179055565b60006104b56f2a24a6a2a0a6262cafa6a0a720a3a2a960811b610528565b6000546001600160a01b031690565b4790565b33610a29610a0d565b6001600160a01b031614610a72576040805162461bcd60e51b81526020600482018190526024820152600080516020610eed833981519152604482015290519081900360640190fd5b610a7b81610d44565b50565b60003411610ac8576040805162461bcd60e51b8152602060048201526012602482015271496e73756666696369656e742066756e647360701b604482015290519081900360640190fd5b565b60006104b57a151253515053131657d41493d353d51253d3905317d09550d2d155602a1b610528565b60006104b5712920a72227a6a722a9a9afa6a0a720a3a2a960711b610528565b60006104b56c2a24a6a2a0a6262cafa1a62aa160991b610528565b6003546001600160a01b03163314610b7b576040805162461bcd60e51b815260206004820152601e6024820152600080516020610f4f833981519152604482015290519081900360640190fd5b6003546040516000916001600160a01b03169047908381818185875af1925050503d8060008114610bc8576040519150601f19603f3d011682016040523d82523d6000602084013e610bcd565b606091505b5050905080610a7b5760405162461bcd60e51b8152600401808060200182810382526021815260200180610f2e6021913960400191505060405180910390fd5b610c15610d66565b6000546001600160a01b03908116911614610c65576040805162461bcd60e51b81526020600482018190526024820152600080516020610eed833981519152604482015290519081900360640190fd5b610a7b81610d6a565b60006104b569505245504149445f455360b01b610528565b60006104b5702b20a624a220aa27a92fa6a0a720a3a2a960791b610528565b600082610cb457506000610496565b82820282848281610cc157fe5b0414610cfe5760405162461bcd60e51b8152600401808060200182810382526021815260200180610f6f6021913960400191505060405180910390fd5b9392505050565b6000610cfe83836040518060400160405280601a815260200179536166654d6174683a206469766973696f6e206279207a65726f60301b815250610e20565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b3390565b6001600160a01b038116610dc5576040805162461bcd60e51b815260206004820152601f60248201527f4f776e61626c653a204e45575f4f574e45525f49535f5a45524f5f4144445200604482015290519081900360640190fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b60008183610eac5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610e71578181015183820152602001610e59565b50505050905090810190601f168015610e9e5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506000838581610eb857fe5b049594505050505056fe52656769737472793a205245534f4c5645445f4e554c4c5f555345524e414d455f494e5f5354524943544f776e61626c653a2043414c4c45525f49535f4e4f545f5448455f4f574e4552496e63656e746976652063616e2774206265206d6f72652074686174203939202557697468647261773a2050524f4649545f5452414e534645525f4641494c494e47476f7665726e3a20796f7520617265206e6f7420417574686f72697a65640000536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f7752656769737472793a205245534f4c5645445f5a45524f5f414444525f494e5f535452494354a2646970667358221220b48798f1ee280fcca94710cbf4be5cab539c913bcf7ebdcb5145315a5e2fae0f64736f6c63430007050033';
