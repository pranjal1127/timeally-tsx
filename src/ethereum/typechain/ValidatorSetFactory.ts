/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts';

import { ValidatorSet } from './ValidatorSet';

export class ValidatorSetFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _seedValidators: string[],
    _testSystemAddress: string,
    overrides?: Overrides
  ): Promise<ValidatorSet> {
    return super.deploy(_seedValidators, _testSystemAddress, overrides || {}) as Promise<
      ValidatorSet
    >;
  }
  getDeployTransaction(
    _seedValidators: string[],
    _testSystemAddress: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_seedValidators, _testSystemAddress, overrides || {});
  }
  attach(address: string): ValidatorSet {
    return super.attach(address) as ValidatorSet;
  }
  connect(signer: Signer): ValidatorSetFactory {
    return super.connect(signer) as ValidatorSetFactory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ValidatorSet {
    return new Contract(address, _abi, signerOrProvider) as ValidatorSet;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: 'address[]',
        name: '_seedValidators',
        type: 'address[]',
      },
      {
        internalType: 'address',
        name: '_testSystemAddress',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: '_parent_hash',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'address[]',
        name: '_new_set',
        type: 'address[]',
      },
    ],
    name: 'InitiateChange',
    type: 'event',
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
    inputs: [],
    name: 'BLOCKS_INTERVAL',
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
    name: 'LUCK_TRIES',
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
    name: 'MAX_VALIDATORS',
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
    name: 'PERCENT_UNIQUE',
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
    name: 'SYSTEM_ADDRESS',
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
    name: 'finalizeChange',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getNextValidators',
    outputs: [
      {
        internalType: 'address[]',
        name: '',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getValidators',
    outputs: [
      {
        internalType: 'address[]',
        name: '',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'initiateChange',
    outputs: [],
    stateMutability: 'nonpayable',
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
    name: 'lastFinalizeChangeBlock',
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
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'pure',
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
        internalType: 'uint256',
        name: '_BLOCKS_INTERVAL',
        type: 'uint256',
      },
    ],
    name: 'setBlocksInterval',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'setInitialValues',
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
    inputs: [
      {
        internalType: 'uint256',
        name: '_LUCK_TRIES',
        type: 'uint256',
      },
    ],
    name: 'setLuckTries',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_MAX_VALIDATORS',
        type: 'uint256',
      },
    ],
    name: 'setMaxValidators',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_PERCENT_UNIQUE',
        type: 'uint256',
      },
    ],
    name: 'setPercentUnique',
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
];

const _bytecode =
  '0x60806040526005600281905560336003556004805560289055600780546001600160a01b0319166002600160a01b031790553480156200003e57600080fd5b506040516200131738038062001317833981810160405260408110156200006457600080fd5b81019080805160405193929190846401000000008211156200008557600080fd5b9083019060208201858111156200009b57600080fd5b8251866020820283011164010000000082111715620000b957600080fd5b82525081516020918201928201910280838360005b83811015620000e8578181015183820152602001620000ce565b5050505091909101604052506020015191506000905062000108620001b2565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350815162000167906008906020850190620001b6565b5081516200017d90600a906020850190620001b6565b506001600160a01b03811615620001aa57600780546001600160a01b0319166001600160a01b0383161790555b505062000241565b3390565b8280548282559060005260206000209081019282156200020e579160200282015b828111156200020e57825182546001600160a01b0319166001600160a01b03909116178255602090920191600190910190620001d7565b506200021c92915062000220565b5090565b5b808211156200021c5780546001600160a01b031916815560010162000221565b6110c680620002516000396000f3fe608060405234801561001057600080fd5b50600436106101e55760003560e01c8063722d2b3e1161010f578063b3273748116100a2578063dccc1b0811610071578063dccc1b0814610405578063f2fde38b1461040d578063f456795114610433578063fe55bde91461043b576101e5565b8063b3273748146103e5578063b58a6375146103ed578063b7ab4db5146103f5578063bf8c3144146103fd576101e5565b80639bb2ea5a116100de5780639bb2ea5a1461039b578063a61fc60d146103b8578063a7017b52146103d5578063add7d01e146103dd576101e5565b8063722d2b3e1461035d57806375286211146103655780638da5cb5b1461036d57806398b1a44d14610375576101e5565b80634e855fb2116101875780636a14920a116101565780636a14920a146103135780636ad6650614610330578063714897df1461034d578063715018a614610355576101e5565b80634e855fb2146102f3578063585a80f3146102fb57806364760fff1461030357806367b48b181461030b576101e5565b80631f70693c116101c35780631f70693c14610265578063208b38041461028b5780633434735f1461029357806340cddab31461029b576101e5565b8063082eaf7c146101ea5780630d541ecb146102095780630df5202f14610241575b600080fd5b6102076004803603602081101561020057600080fd5b5035610443565b005b61022f6004803603602081101561021f57600080fd5b50356001600160a01b03166104ac565b60408051918252519081900360200190f35b6102496104fc565b604080516001600160a01b039092168252519081900360200190f35b61022f6004803603602081101561027b57600080fd5b50356001600160a01b031661052c565b6102496105c8565b6102496105f3565b6102a3610602565b60408051602080825283518183015283519192839290830191858101910280838360005b838110156102df5781810151838201526020016102c7565b505050509050019250505060405180910390f35b61022f610664565b61022f61066a565b61022f610670565b610249610676565b6102496004803603602081101561032957600080fd5b5035610685565b6102076004803603602081101561034657600080fd5b50356106ea565b61022f610753565b610207610759565b6102496107a6565b6102076107d1565b610249610850565b6102076004803603602081101561038b57600080fd5b50356001600160a01b031661085f565b610207600480360360208110156103b157600080fd5b50356108f2565b610207600480360360208110156103ce57600080fd5b503561095b565b6102496109c4565b61022f6109ef565b6102076109f5565b610207610b8b565b6102a3610b8d565b610249610bed565b610249610c18565b6102076004803603602081101561042357600080fd5b50356001600160a01b0316610c43565b610249610d5a565b610249610d85565b3361044c610850565b6001600160a01b0316146104a7576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600355565b6000806104b88361052c565b9050806104f65760405162461bcd60e51b815260040180806020018281038252602a81526020018061101b602a913960400191505060405180910390fd5b92915050565b60006105277f4e52545f4d414e41474552000000000000000000000000000000000000000000610dac565b905090565b600154604080517f1f70693c0000000000000000000000000000000000000000000000000000000081526001600160a01b03848116600483015291516000939290921691631f70693c91602480820192602092909190829003018186803b15801561059657600080fd5b505afa1580156105aa573d6000803e3d6000fd5b505050506040513d60208110156105c057600080fd5b505192915050565b60006105277f4441595357415050455253000000000000000000000000000000000000000000610dac565b6007546001600160a01b031681565b6060600980548060200260200160405190810160405280929190818152602001828054801561065a57602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161063c575b5050505050905090565b60045481565b60065481565b60035481565b6001546001600160a01b031690565b600154604080517f6a14920a0000000000000000000000000000000000000000000000000000000081526004810184905290516000926001600160a01b031691636a14920a916024808301926020929190829003018186803b15801561059657600080fd5b336106f3610850565b6001600160a01b03161461074e576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600455565b60025481565b6040805162461bcd60e51b815260206004820152601c60248201527f4552433137333a2052454e4f554e43455f4e4f545f414c4c4f57454400000000604482015290519081900360640190fd5b60006105277f54494d45414c4c595f4d414e4147455200000000000000000000000000000000610dac565b6007546001600160a01b03163314610830576040805162461bcd60e51b815260206004820152601a60248201527f417552613a204f6e6c792073797374656d2063616e2063616c6c000000000000604482015290519081900360640190fd5b6009541561084a576009805461084891600891610f6b565b505b43600655565b6000546001600160a01b031690565b33610868610850565b6001600160a01b0316146108c3576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6001805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b336108fb610850565b6001600160a01b031614610956576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600255565b33610964610850565b6001600160a01b0316146109bf576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600555565b60006105277f54494d45414c4c595f50524f4d4f54494f4e414c5f4255434b45540000000000610dac565b60055481565b600654610a49576040805162461bcd60e51b815260206004820152601560248201527f417552613a2043616e6e6f7420696e6974696174650000000000000000000000604482015290519081900360640190fd5b600554600654014311610aa3576040805162461bcd60e51b815260206004820152600f60248201527f417572613a20546f6f206561726c790000000000000000000000000000000000604482015290519081900360640190fd5b610aab610dff565b600954610aff576040805162461bcd60e51b815260206004820152601360248201527f417572613a204e6f2056616c696461746f727300000000000000000000000000604482015290519081900360640190fd5b60014303407f55252fa6eee4741b4e24a74a70e9c11fd2c2281df8d6ea13126ff845f7825c89600960405180806020018281038252838181548152602001915080548015610b7657602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610b58575b50509250505060405180910390a26000600655565b565b6060600880548060200260200160405190810160405280929190818152602001828054801561065a576020028201919060005260206000209081546001600160a01b0316815260019091019060200180831161063c575050505050905090565b60006105277f52414e444f4d4e4553535f4d414e414745520000000000000000000000000000610dac565b60006105277f54494d45414c4c595f434c554200000000000000000000000000000000000000610dac565b610c4b610f67565b6000546001600160a01b03908116911614610cad576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6001600160a01b038116610cf25760405162461bcd60e51b81526004018080602001828103825260268152602001806110456026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b60006105277f505245504149445f455300000000000000000000000000000000000000000000610dac565b60006105277f56414c494441544f525f4d414e414745520000000000000000000000000000005b600080610db883610685565b90506001600160a01b0381166104f65760405162461bcd60e51b815260040180806020018281038252602681526020018061106b6026913960400191505060405180910390fd5b610e0b60096000610fbb565b60005b60045460025402811015610f645760025460095410610e2c57610f64565b6000610e36610d85565b6001600160a01b031663b50eb04b6040518163ffffffff1660e01b8152600401602060405180830381600087803b158015610e7057600080fd5b505af1158015610e84573d6000803e3d6000fd5b505050506040513d6020811015610e9a57600080fd5b505190506000805b600954811015610efb57600280546009549091021180610ee5575060098181548110610eca57fe5b6000918252602090912001546001600160a01b038481169116145b15610ef35760019150610efb565b600101610ea2565b5080610f5a57600980546001810182556000919091527f6e1540171b6c0c960b71a7020d9f60077f6af931a8bbf590da0223dacf75c7af01805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0384161790555b5050600101610e0e565b50565b3390565b828054828255906000526020600020908101928215610fab5760005260206000209182015b82811115610fab578254825591600101919060010190610f90565b50610fb7929150610fd9565b5090565b5080546000825590600052602060002090810190610f649190611005565b5b80821115610fb757805473ffffffffffffffffffffffffffffffffffffffff19168155600101610fda565b5b80821115610fb7576000815560010161100656fe52656769737472793a205245534f4c5645445f4e554c4c5f555345524e414d455f494e5f5354524943544f776e61626c653a206e6577206f776e657220697320746865207a65726f206164647265737352656769737472793a205245534f4c5645445f5a45524f5f414444525f494e5f535452494354a2646970667358221220c48ec6ef15fb4f01f0f8e760df454e469e6c56b2d993b817ef656c4517dc5c7b64736f6c63430007010033';
