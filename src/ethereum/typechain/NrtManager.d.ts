/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { ethers, EventFilter, Signer, BigNumber, BigNumberish, PopulatedTransaction } from 'ethers';
import { Contract, ContractTransaction, Overrides, CallOverrides } from '@ethersproject/contracts';
import { BytesLike } from '@ethersproject/bytes';
import { Listener, Provider } from '@ethersproject/providers';
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi';

interface NrtManagerInterface extends ethers.utils.Interface {
  functions: {
    'BURN_ADDR()': FunctionFragment;
    'SECONDS_IN_MONTH()': FunctionFragment;
    'annualNRT()': FunctionFragment;
    'burnPoolBalance()': FunctionFragment;
    'currentNrtMonth()': FunctionFragment;
    'getBurnAmount()': FunctionFragment;
    'getPerThousand(uint256)': FunctionFragment;
    'getPerThousands()': FunctionFragment;
    'getPlatform(uint256)': FunctionFragment;
    'getPlatformDetails()': FunctionFragment;
    'getPlatforms()': FunctionFragment;
    'lastReleaseTimestamp()': FunctionFragment;
    'luckPoolBalance()': FunctionFragment;
    'releaseMonthlyNRT()': FunctionFragment;
    'setInitialValues(address[],uint256[])': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'BURN_ADDR', values?: undefined): string;
  encodeFunctionData(functionFragment: 'SECONDS_IN_MONTH', values?: undefined): string;
  encodeFunctionData(functionFragment: 'annualNRT', values?: undefined): string;
  encodeFunctionData(functionFragment: 'burnPoolBalance', values?: undefined): string;
  encodeFunctionData(functionFragment: 'currentNrtMonth', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getBurnAmount', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getPerThousand', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'getPerThousands', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getPlatform', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'getPlatformDetails', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getPlatforms', values?: undefined): string;
  encodeFunctionData(functionFragment: 'lastReleaseTimestamp', values?: undefined): string;
  encodeFunctionData(functionFragment: 'luckPoolBalance', values?: undefined): string;
  encodeFunctionData(functionFragment: 'releaseMonthlyNRT', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'setInitialValues',
    values: [string[], BigNumberish[]]
  ): string;

  decodeFunctionResult(functionFragment: 'BURN_ADDR', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'SECONDS_IN_MONTH', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'annualNRT', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'burnPoolBalance', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'currentNrtMonth', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getBurnAmount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getPerThousand', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getPerThousands', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getPlatform', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getPlatformDetails', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getPlatforms', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'lastReleaseTimestamp', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'luckPoolBalance', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'releaseMonthlyNRT', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setInitialValues', data: BytesLike): Result;

  events: {};
}

export class NrtManager extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: NrtManagerInterface;

  functions: {
    BURN_ADDR(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    SECONDS_IN_MONTH(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    annualNRT(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    burnPoolBalance(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    currentNrtMonth(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    getBurnAmount(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    getPerThousand(
      _perThousandIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    getPerThousands(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber[];
    }>;

    getPlatform(
      _platformIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    getPlatformDetails(
      overrides?: CallOverrides
    ): Promise<{
      0: string[];
      1: BigNumber[];
    }>;

    getPlatforms(
      overrides?: CallOverrides
    ): Promise<{
      0: string[];
    }>;

    lastReleaseTimestamp(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    luckPoolBalance(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    releaseMonthlyNRT(overrides?: Overrides): Promise<ContractTransaction>;

    setInitialValues(
      _platforms: string[],
      _perThousands: BigNumberish[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  BURN_ADDR(overrides?: CallOverrides): Promise<string>;

  SECONDS_IN_MONTH(overrides?: CallOverrides): Promise<BigNumber>;

  annualNRT(overrides?: CallOverrides): Promise<BigNumber>;

  burnPoolBalance(overrides?: CallOverrides): Promise<BigNumber>;

  currentNrtMonth(overrides?: CallOverrides): Promise<BigNumber>;

  getBurnAmount(overrides?: CallOverrides): Promise<BigNumber>;

  getPerThousand(_perThousandIndex: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  getPerThousands(overrides?: CallOverrides): Promise<BigNumber[]>;

  getPlatform(_platformIndex: BigNumberish, overrides?: CallOverrides): Promise<string>;

  getPlatformDetails(
    overrides?: CallOverrides
  ): Promise<{
    0: string[];
    1: BigNumber[];
  }>;

  getPlatforms(overrides?: CallOverrides): Promise<string[]>;

  lastReleaseTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

  luckPoolBalance(overrides?: CallOverrides): Promise<BigNumber>;

  releaseMonthlyNRT(overrides?: Overrides): Promise<ContractTransaction>;

  setInitialValues(
    _platforms: string[],
    _perThousands: BigNumberish[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    BURN_ADDR(overrides?: CallOverrides): Promise<string>;

    SECONDS_IN_MONTH(overrides?: CallOverrides): Promise<BigNumber>;

    annualNRT(overrides?: CallOverrides): Promise<BigNumber>;

    burnPoolBalance(overrides?: CallOverrides): Promise<BigNumber>;

    currentNrtMonth(overrides?: CallOverrides): Promise<BigNumber>;

    getBurnAmount(overrides?: CallOverrides): Promise<BigNumber>;

    getPerThousand(_perThousandIndex: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    getPerThousands(overrides?: CallOverrides): Promise<BigNumber[]>;

    getPlatform(_platformIndex: BigNumberish, overrides?: CallOverrides): Promise<string>;

    getPlatformDetails(
      overrides?: CallOverrides
    ): Promise<{
      0: string[];
      1: BigNumber[];
    }>;

    getPlatforms(overrides?: CallOverrides): Promise<string[]>;

    lastReleaseTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    luckPoolBalance(overrides?: CallOverrides): Promise<BigNumber>;

    releaseMonthlyNRT(overrides?: CallOverrides): Promise<void>;

    setInitialValues(
      _platforms: string[],
      _perThousands: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    BURN_ADDR(): Promise<BigNumber>;
    SECONDS_IN_MONTH(): Promise<BigNumber>;
    annualNRT(): Promise<BigNumber>;
    burnPoolBalance(): Promise<BigNumber>;
    currentNrtMonth(): Promise<BigNumber>;
    getBurnAmount(): Promise<BigNumber>;
    getPerThousand(_perThousandIndex: BigNumberish): Promise<BigNumber>;
    getPerThousands(): Promise<BigNumber>;
    getPlatform(_platformIndex: BigNumberish): Promise<BigNumber>;
    getPlatformDetails(): Promise<BigNumber>;
    getPlatforms(): Promise<BigNumber>;
    lastReleaseTimestamp(): Promise<BigNumber>;
    luckPoolBalance(): Promise<BigNumber>;
    releaseMonthlyNRT(): Promise<BigNumber>;
    setInitialValues(_platforms: string[], _perThousands: BigNumberish[]): Promise<BigNumber>;
  };

  populateTransaction: {
    BURN_ADDR(): Promise<PopulatedTransaction>;
    SECONDS_IN_MONTH(): Promise<PopulatedTransaction>;
    annualNRT(): Promise<PopulatedTransaction>;
    burnPoolBalance(): Promise<PopulatedTransaction>;
    currentNrtMonth(): Promise<PopulatedTransaction>;
    getBurnAmount(): Promise<PopulatedTransaction>;
    getPerThousand(_perThousandIndex: BigNumberish): Promise<PopulatedTransaction>;
    getPerThousands(): Promise<PopulatedTransaction>;
    getPlatform(_platformIndex: BigNumberish): Promise<PopulatedTransaction>;
    getPlatformDetails(): Promise<PopulatedTransaction>;
    getPlatforms(): Promise<PopulatedTransaction>;
    lastReleaseTimestamp(): Promise<PopulatedTransaction>;
    luckPoolBalance(): Promise<PopulatedTransaction>;
    releaseMonthlyNRT(): Promise<PopulatedTransaction>;
    setInitialValues(
      _platforms: string[],
      _perThousands: BigNumberish[]
    ): Promise<PopulatedTransaction>;
  };
}