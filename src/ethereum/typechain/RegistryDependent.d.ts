/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { ethers, EventFilter, Signer, BigNumber, BigNumberish, PopulatedTransaction } from 'ethers';
import { Contract, ContractTransaction, Overrides, CallOverrides } from '@ethersproject/contracts';
import { BytesLike } from '@ethersproject/bytes';
import { Listener, Provider } from '@ethersproject/providers';
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi';

interface RegistryDependentInterface extends ethers.utils.Interface {
  functions: {
    'dayswappers()': FunctionFragment;
    'kycDapp()': FunctionFragment;
    'nrtManager()': FunctionFragment;
    'owner()': FunctionFragment;
    'prepaidEs()': FunctionFragment;
    'randomnessManager()': FunctionFragment;
    'renounceOwnership()': FunctionFragment;
    'resolveAddress(bytes32)': FunctionFragment;
    'resolveUsername(address)': FunctionFragment;
    'resolveUsernameStrict(address)': FunctionFragment;
    'setKycDapp(address)': FunctionFragment;
    'timeallyClub()': FunctionFragment;
    'timeallyManager()': FunctionFragment;
    'timeallyPromotionalBucket()': FunctionFragment;
    'transferOwnership(address)': FunctionFragment;
    'validatorManager()': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'dayswappers', values?: undefined): string;
  encodeFunctionData(functionFragment: 'kycDapp', values?: undefined): string;
  encodeFunctionData(functionFragment: 'nrtManager', values?: undefined): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'prepaidEs', values?: undefined): string;
  encodeFunctionData(functionFragment: 'randomnessManager', values?: undefined): string;
  encodeFunctionData(functionFragment: 'renounceOwnership', values?: undefined): string;
  encodeFunctionData(functionFragment: 'resolveAddress', values: [BytesLike]): string;
  encodeFunctionData(functionFragment: 'resolveUsername', values: [string]): string;
  encodeFunctionData(functionFragment: 'resolveUsernameStrict', values: [string]): string;
  encodeFunctionData(functionFragment: 'setKycDapp', values: [string]): string;
  encodeFunctionData(functionFragment: 'timeallyClub', values?: undefined): string;
  encodeFunctionData(functionFragment: 'timeallyManager', values?: undefined): string;
  encodeFunctionData(functionFragment: 'timeallyPromotionalBucket', values?: undefined): string;
  encodeFunctionData(functionFragment: 'transferOwnership', values: [string]): string;
  encodeFunctionData(functionFragment: 'validatorManager', values?: undefined): string;

  decodeFunctionResult(functionFragment: 'dayswappers', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'kycDapp', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'nrtManager', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'prepaidEs', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'randomnessManager', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'renounceOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'resolveAddress', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'resolveUsername', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'resolveUsernameStrict', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setKycDapp', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'timeallyClub', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'timeallyManager', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'timeallyPromotionalBucket', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'validatorManager', data: BytesLike): Result;

  events: {
    'OwnershipTransferred(address,address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
}

export class RegistryDependent extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: RegistryDependentInterface;

  functions: {
    dayswappers(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    'dayswappers()'(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    kycDapp(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    'kycDapp()'(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    nrtManager(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    'nrtManager()'(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    /**
     * Returns the address of the current owner.
     */
    owner(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    /**
     * Returns the address of the current owner.
     */
    'owner()'(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    prepaidEs(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    'prepaidEs()'(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    randomnessManager(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    'randomnessManager()'(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(
      overrides?: CallOverrides
    ): Promise<{
      0: void;
    }>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    'renounceOwnership()'(
      overrides?: CallOverrides
    ): Promise<{
      0: void;
    }>;

    resolveAddress(
      _username: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    'resolveAddress(bytes32)'(
      _username: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    resolveUsername(
      _wallet: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    'resolveUsername(address)'(
      _wallet: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    resolveUsernameStrict(
      _wallet: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    'resolveUsernameStrict(address)'(
      _wallet: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    setKycDapp(_kycDapp: string, overrides?: Overrides): Promise<ContractTransaction>;

    'setKycDapp(address)'(_kycDapp: string, overrides?: Overrides): Promise<ContractTransaction>;

    timeallyClub(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    'timeallyClub()'(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    timeallyManager(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    'timeallyManager()'(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    timeallyPromotionalBucket(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    'timeallyPromotionalBucket()'(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(newOwner: string, overrides?: Overrides): Promise<ContractTransaction>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    'transferOwnership(address)'(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    validatorManager(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    'validatorManager()'(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;
  };

  dayswappers(overrides?: CallOverrides): Promise<string>;

  'dayswappers()'(overrides?: CallOverrides): Promise<string>;

  kycDapp(overrides?: CallOverrides): Promise<string>;

  'kycDapp()'(overrides?: CallOverrides): Promise<string>;

  nrtManager(overrides?: CallOverrides): Promise<string>;

  'nrtManager()'(overrides?: CallOverrides): Promise<string>;

  /**
   * Returns the address of the current owner.
   */
  owner(overrides?: CallOverrides): Promise<string>;

  /**
   * Returns the address of the current owner.
   */
  'owner()'(overrides?: CallOverrides): Promise<string>;

  prepaidEs(overrides?: CallOverrides): Promise<string>;

  'prepaidEs()'(overrides?: CallOverrides): Promise<string>;

  randomnessManager(overrides?: CallOverrides): Promise<string>;

  'randomnessManager()'(overrides?: CallOverrides): Promise<string>;

  /**
   * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
   */
  renounceOwnership(overrides?: CallOverrides): Promise<void>;

  /**
   * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
   */
  'renounceOwnership()'(overrides?: CallOverrides): Promise<void>;

  resolveAddress(_username: BytesLike, overrides?: CallOverrides): Promise<string>;

  'resolveAddress(bytes32)'(_username: BytesLike, overrides?: CallOverrides): Promise<string>;

  resolveUsername(_wallet: string, overrides?: CallOverrides): Promise<string>;

  'resolveUsername(address)'(_wallet: string, overrides?: CallOverrides): Promise<string>;

  resolveUsernameStrict(_wallet: string, overrides?: CallOverrides): Promise<string>;

  'resolveUsernameStrict(address)'(_wallet: string, overrides?: CallOverrides): Promise<string>;

  setKycDapp(_kycDapp: string, overrides?: Overrides): Promise<ContractTransaction>;

  'setKycDapp(address)'(_kycDapp: string, overrides?: Overrides): Promise<ContractTransaction>;

  timeallyClub(overrides?: CallOverrides): Promise<string>;

  'timeallyClub()'(overrides?: CallOverrides): Promise<string>;

  timeallyManager(overrides?: CallOverrides): Promise<string>;

  'timeallyManager()'(overrides?: CallOverrides): Promise<string>;

  timeallyPromotionalBucket(overrides?: CallOverrides): Promise<string>;

  'timeallyPromotionalBucket()'(overrides?: CallOverrides): Promise<string>;

  /**
   * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
   */
  transferOwnership(newOwner: string, overrides?: Overrides): Promise<ContractTransaction>;

  /**
   * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
   */
  'transferOwnership(address)'(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  validatorManager(overrides?: CallOverrides): Promise<string>;

  'validatorManager()'(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    dayswappers(overrides?: CallOverrides): Promise<string>;

    'dayswappers()'(overrides?: CallOverrides): Promise<string>;

    kycDapp(overrides?: CallOverrides): Promise<string>;

    'kycDapp()'(overrides?: CallOverrides): Promise<string>;

    nrtManager(overrides?: CallOverrides): Promise<string>;

    'nrtManager()'(overrides?: CallOverrides): Promise<string>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<string>;

    /**
     * Returns the address of the current owner.
     */
    'owner()'(overrides?: CallOverrides): Promise<string>;

    prepaidEs(overrides?: CallOverrides): Promise<string>;

    'prepaidEs()'(overrides?: CallOverrides): Promise<string>;

    randomnessManager(overrides?: CallOverrides): Promise<string>;

    'randomnessManager()'(overrides?: CallOverrides): Promise<string>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    'renounceOwnership()'(overrides?: CallOverrides): Promise<void>;

    resolveAddress(_username: BytesLike, overrides?: CallOverrides): Promise<string>;

    'resolveAddress(bytes32)'(_username: BytesLike, overrides?: CallOverrides): Promise<string>;

    resolveUsername(_wallet: string, overrides?: CallOverrides): Promise<string>;

    'resolveUsername(address)'(_wallet: string, overrides?: CallOverrides): Promise<string>;

    resolveUsernameStrict(_wallet: string, overrides?: CallOverrides): Promise<string>;

    'resolveUsernameStrict(address)'(_wallet: string, overrides?: CallOverrides): Promise<string>;

    setKycDapp(_kycDapp: string, overrides?: CallOverrides): Promise<void>;

    'setKycDapp(address)'(_kycDapp: string, overrides?: CallOverrides): Promise<void>;

    timeallyClub(overrides?: CallOverrides): Promise<string>;

    'timeallyClub()'(overrides?: CallOverrides): Promise<string>;

    timeallyManager(overrides?: CallOverrides): Promise<string>;

    'timeallyManager()'(overrides?: CallOverrides): Promise<string>;

    timeallyPromotionalBucket(overrides?: CallOverrides): Promise<string>;

    'timeallyPromotionalBucket()'(overrides?: CallOverrides): Promise<string>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    'transferOwnership(address)'(newOwner: string, overrides?: CallOverrides): Promise<void>;

    validatorManager(overrides?: CallOverrides): Promise<string>;

    'validatorManager()'(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    OwnershipTransferred(previousOwner: string | null, newOwner: string | null): EventFilter;
  };

  estimateGas: {
    dayswappers(overrides?: CallOverrides): Promise<BigNumber>;

    'dayswappers()'(overrides?: CallOverrides): Promise<BigNumber>;

    kycDapp(overrides?: CallOverrides): Promise<BigNumber>;

    'kycDapp()'(overrides?: CallOverrides): Promise<BigNumber>;

    nrtManager(overrides?: CallOverrides): Promise<BigNumber>;

    'nrtManager()'(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Returns the address of the current owner.
     */
    'owner()'(overrides?: CallOverrides): Promise<BigNumber>;

    prepaidEs(overrides?: CallOverrides): Promise<BigNumber>;

    'prepaidEs()'(overrides?: CallOverrides): Promise<BigNumber>;

    randomnessManager(overrides?: CallOverrides): Promise<BigNumber>;

    'randomnessManager()'(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    'renounceOwnership()'(overrides?: CallOverrides): Promise<BigNumber>;

    resolveAddress(_username: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    'resolveAddress(bytes32)'(_username: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    resolveUsername(_wallet: string, overrides?: CallOverrides): Promise<BigNumber>;

    'resolveUsername(address)'(_wallet: string, overrides?: CallOverrides): Promise<BigNumber>;

    resolveUsernameStrict(_wallet: string, overrides?: CallOverrides): Promise<BigNumber>;

    'resolveUsernameStrict(address)'(
      _wallet: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setKycDapp(_kycDapp: string, overrides?: Overrides): Promise<BigNumber>;

    'setKycDapp(address)'(_kycDapp: string, overrides?: Overrides): Promise<BigNumber>;

    timeallyClub(overrides?: CallOverrides): Promise<BigNumber>;

    'timeallyClub()'(overrides?: CallOverrides): Promise<BigNumber>;

    timeallyManager(overrides?: CallOverrides): Promise<BigNumber>;

    'timeallyManager()'(overrides?: CallOverrides): Promise<BigNumber>;

    timeallyPromotionalBucket(overrides?: CallOverrides): Promise<BigNumber>;

    'timeallyPromotionalBucket()'(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(newOwner: string, overrides?: Overrides): Promise<BigNumber>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    'transferOwnership(address)'(newOwner: string, overrides?: Overrides): Promise<BigNumber>;

    validatorManager(overrides?: CallOverrides): Promise<BigNumber>;

    'validatorManager()'(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    dayswappers(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'dayswappers()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    kycDapp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'kycDapp()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nrtManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'nrtManager()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Returns the address of the current owner.
     */
    'owner()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    prepaidEs(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'prepaidEs()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    randomnessManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'randomnessManager()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    'renounceOwnership()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    resolveAddress(_username: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'resolveAddress(bytes32)'(
      _username: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    resolveUsername(_wallet: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'resolveUsername(address)'(
      _wallet: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    resolveUsernameStrict(
      _wallet: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    'resolveUsernameStrict(address)'(
      _wallet: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setKycDapp(_kycDapp: string, overrides?: Overrides): Promise<PopulatedTransaction>;

    'setKycDapp(address)'(_kycDapp: string, overrides?: Overrides): Promise<PopulatedTransaction>;

    timeallyClub(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'timeallyClub()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    timeallyManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'timeallyManager()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    timeallyPromotionalBucket(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'timeallyPromotionalBucket()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(newOwner: string, overrides?: Overrides): Promise<PopulatedTransaction>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    'transferOwnership(address)'(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    validatorManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'validatorManager()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
