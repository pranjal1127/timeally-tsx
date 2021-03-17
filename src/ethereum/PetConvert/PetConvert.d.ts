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
  
  interface PetConvertInterface extends ethers.utils.Interface {
    functions: {
      "AllowedWES(address)": FunctionFragment;
      "ClaimedWES(address)": FunctionFragment;
      "ConvertWES(uint256)": FunctionFragment;
      "lastWithdrawMonthID(address,uint256)": FunctionFragment;
      "monthlyAnnuity(address,uint256,uint256)": FunctionFragment;
      "pet()": FunctionFragment;
      "powerBooster(address,uint256,uint256)": FunctionFragment;
      "powerBoosterId(address,uint256,uint256)": FunctionFragment;
      "prepaidEs()": FunctionFragment;
    };
  
    encodeFunctionData(functionFragment: "AllowedWES", values: [string]): string;
    encodeFunctionData(functionFragment: "ClaimedWES", values: [string]): string;
    encodeFunctionData(
      functionFragment: "ConvertWES",
      values: [BigNumberish]
    ): string;
    encodeFunctionData(
      functionFragment: "lastWithdrawMonthID",
      values: [string, BigNumberish]
    ): string;
    encodeFunctionData(
      functionFragment: "monthlyAnnuity",
      values: [string, BigNumberish, BigNumberish]
    ): string;
    encodeFunctionData(functionFragment: "pet", values?: undefined): string;
    encodeFunctionData(
      functionFragment: "powerBooster",
      values: [string, BigNumberish, BigNumberish]
    ): string;
    encodeFunctionData(
      functionFragment: "powerBoosterId",
      values: [string, BigNumberish, BigNumberish]
    ): string;
    encodeFunctionData(functionFragment: "prepaidEs", values?: undefined): string;
  
    decodeFunctionResult(functionFragment: "AllowedWES", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ClaimedWES", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ConvertWES", data: BytesLike): Result;
    decodeFunctionResult(
      functionFragment: "lastWithdrawMonthID",
      data: BytesLike
    ): Result;
    decodeFunctionResult(
      functionFragment: "monthlyAnnuity",
      data: BytesLike
    ): Result;
    decodeFunctionResult(functionFragment: "pet", data: BytesLike): Result;
    decodeFunctionResult(
      functionFragment: "powerBooster",
      data: BytesLike
    ): Result;
    decodeFunctionResult(
      functionFragment: "powerBoosterId",
      data: BytesLike
    ): Result;
    decodeFunctionResult(functionFragment: "prepaidEs", data: BytesLike): Result;
  
    events: {};
  }
  
  export class PetConvert extends Contract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
  
    on(event: EventFilter | string, listener: Listener): this;
    once(event: EventFilter | string, listener: Listener): this;
    addListener(eventName: EventFilter | string, listener: Listener): this;
    removeAllListeners(eventName: EventFilter | string): this;
    removeListener(eventName: any, listener: Listener): this;
  
    interface: PetConvertInterface;
  
    functions: {
      AllowedWES(
        arg0: string,
        overrides?: CallOverrides
      ): Promise<{
        0: BigNumber;
      }>;
  
      "AllowedWES(address)"(
        arg0: string,
        overrides?: CallOverrides
      ): Promise<{
        0: BigNumber;
      }>;
  
      ClaimedWES(
        arg0: string,
        overrides?: CallOverrides
      ): Promise<{
        0: BigNumber;
      }>;
  
      "ClaimedWES(address)"(
        arg0: string,
        overrides?: CallOverrides
      ): Promise<{
        0: BigNumber;
      }>;
  
      ConvertWES(
        _amount: BigNumberish,
        overrides?: Overrides
      ): Promise<ContractTransaction>;
  
      "ConvertWES(uint256)"(
        _amount: BigNumberish,
        overrides?: Overrides
      ): Promise<ContractTransaction>;
  
      lastWithdrawMonthID(
        arg0: string,
        arg1: BigNumberish,
        overrides?: CallOverrides
      ): Promise<{
        0: BigNumber;
      }>;
  
      "lastWithdrawMonthID(address,uint256)"(
        arg0: string,
        arg1: BigNumberish,
        overrides?: CallOverrides
      ): Promise<{
        0: BigNumber;
      }>;
  
      monthlyAnnuity(
        _stakerAddress: string,
        _petId: BigNumberish,
        _endAnnuityMonthId: BigNumberish,
        overrides?: Overrides
      ): Promise<ContractTransaction>;
  
      "monthlyAnnuity(address,uint256,uint256)"(
        _stakerAddress: string,
        _petId: BigNumberish,
        _endAnnuityMonthId: BigNumberish,
        overrides?: Overrides
      ): Promise<ContractTransaction>;
  
      pet(
        overrides?: CallOverrides
      ): Promise<{
        0: string;
      }>;
  
      "pet()"(
        overrides?: CallOverrides
      ): Promise<{
        0: string;
      }>;
  
      powerBooster(
        _stakerAddress: string,
        _petId: BigNumberish,
        _powerBoosterId: BigNumberish,
        overrides?: Overrides
      ): Promise<ContractTransaction>;
  
      "powerBooster(address,uint256,uint256)"(
        _stakerAddress: string,
        _petId: BigNumberish,
        _powerBoosterId: BigNumberish,
        overrides?: Overrides
      ): Promise<ContractTransaction>;
  
      powerBoosterId(
        arg0: string,
        arg1: BigNumberish,
        arg2: BigNumberish,
        overrides?: CallOverrides
      ): Promise<{
        0: boolean;
      }>;
  
      "powerBoosterId(address,uint256,uint256)"(
        arg0: string,
        arg1: BigNumberish,
        arg2: BigNumberish,
        overrides?: CallOverrides
      ): Promise<{
        0: boolean;
      }>;
  
      prepaidEs(
        overrides?: CallOverrides
      ): Promise<{
        0: string;
      }>;
  
      "prepaidEs()"(
        overrides?: CallOverrides
      ): Promise<{
        0: string;
      }>;
    };
  
    AllowedWES(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
  
    "AllowedWES(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  
    ClaimedWES(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
  
    "ClaimedWES(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  
    ConvertWES(
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  
    "ConvertWES(uint256)"(
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  
    lastWithdrawMonthID(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  
    "lastWithdrawMonthID(address,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  
    monthlyAnnuity(
      _stakerAddress: string,
      _petId: BigNumberish,
      _endAnnuityMonthId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  
    "monthlyAnnuity(address,uint256,uint256)"(
      _stakerAddress: string,
      _petId: BigNumberish,
      _endAnnuityMonthId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  
    pet(overrides?: CallOverrides): Promise<string>;
  
    "pet()"(overrides?: CallOverrides): Promise<string>;
  
    powerBooster(
      _stakerAddress: string,
      _petId: BigNumberish,
      _powerBoosterId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  
    "powerBooster(address,uint256,uint256)"(
      _stakerAddress: string,
      _petId: BigNumberish,
      _powerBoosterId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  
    powerBoosterId(
      arg0: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;
  
    "powerBoosterId(address,uint256,uint256)"(
      arg0: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;
  
    prepaidEs(overrides?: CallOverrides): Promise<string>;
  
    "prepaidEs()"(overrides?: CallOverrides): Promise<string>;
  
    callStatic: {
      AllowedWES(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
  
      "AllowedWES(address)"(
        arg0: string,
        overrides?: CallOverrides
      ): Promise<BigNumber>;
  
      ClaimedWES(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
  
      "ClaimedWES(address)"(
        arg0: string,
        overrides?: CallOverrides
      ): Promise<BigNumber>;
  
      ConvertWES(_amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
  
      "ConvertWES(uint256)"(
        _amount: BigNumberish,
        overrides?: CallOverrides
      ): Promise<void>;
  
      lastWithdrawMonthID(
        arg0: string,
        arg1: BigNumberish,
        overrides?: CallOverrides
      ): Promise<BigNumber>;
  
      "lastWithdrawMonthID(address,uint256)"(
        arg0: string,
        arg1: BigNumberish,
        overrides?: CallOverrides
      ): Promise<BigNumber>;
  
      monthlyAnnuity(
        _stakerAddress: string,
        _petId: BigNumberish,
        _endAnnuityMonthId: BigNumberish,
        overrides?: CallOverrides
      ): Promise<BigNumber>;
  
      "monthlyAnnuity(address,uint256,uint256)"(
        _stakerAddress: string,
        _petId: BigNumberish,
        _endAnnuityMonthId: BigNumberish,
        overrides?: CallOverrides
      ): Promise<BigNumber>;
  
      pet(overrides?: CallOverrides): Promise<string>;
  
      "pet()"(overrides?: CallOverrides): Promise<string>;
  
      powerBooster(
        _stakerAddress: string,
        _petId: BigNumberish,
        _powerBoosterId: BigNumberish,
        overrides?: CallOverrides
      ): Promise<void>;
  
      "powerBooster(address,uint256,uint256)"(
        _stakerAddress: string,
        _petId: BigNumberish,
        _powerBoosterId: BigNumberish,
        overrides?: CallOverrides
      ): Promise<void>;
  
      powerBoosterId(
        arg0: string,
        arg1: BigNumberish,
        arg2: BigNumberish,
        overrides?: CallOverrides
      ): Promise<boolean>;
  
      "powerBoosterId(address,uint256,uint256)"(
        arg0: string,
        arg1: BigNumberish,
        arg2: BigNumberish,
        overrides?: CallOverrides
      ): Promise<boolean>;
  
      prepaidEs(overrides?: CallOverrides): Promise<string>;
  
      "prepaidEs()"(overrides?: CallOverrides): Promise<string>;
    };
  
    filters: {};
  
    estimateGas: {
      AllowedWES(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
  
      "AllowedWES(address)"(
        arg0: string,
        overrides?: CallOverrides
      ): Promise<BigNumber>;
  
      ClaimedWES(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
  
      "ClaimedWES(address)"(
        arg0: string,
        overrides?: CallOverrides
      ): Promise<BigNumber>;
  
      ConvertWES(
        _amount: BigNumberish,
        overrides?: Overrides
      ): Promise<BigNumber>;
  
      "ConvertWES(uint256)"(
        _amount: BigNumberish,
        overrides?: Overrides
      ): Promise<BigNumber>;
  
      lastWithdrawMonthID(
        arg0: string,
        arg1: BigNumberish,
        overrides?: CallOverrides
      ): Promise<BigNumber>;
  
      "lastWithdrawMonthID(address,uint256)"(
        arg0: string,
        arg1: BigNumberish,
        overrides?: CallOverrides
      ): Promise<BigNumber>;
  
      monthlyAnnuity(
        _stakerAddress: string,
        _petId: BigNumberish,
        _endAnnuityMonthId: BigNumberish,
        overrides?: Overrides
      ): Promise<BigNumber>;
  
      "monthlyAnnuity(address,uint256,uint256)"(
        _stakerAddress: string,
        _petId: BigNumberish,
        _endAnnuityMonthId: BigNumberish,
        overrides?: Overrides
      ): Promise<BigNumber>;
  
      pet(overrides?: CallOverrides): Promise<BigNumber>;
  
      "pet()"(overrides?: CallOverrides): Promise<BigNumber>;
  
      powerBooster(
        _stakerAddress: string,
        _petId: BigNumberish,
        _powerBoosterId: BigNumberish,
        overrides?: Overrides
      ): Promise<BigNumber>;
  
      "powerBooster(address,uint256,uint256)"(
        _stakerAddress: string,
        _petId: BigNumberish,
        _powerBoosterId: BigNumberish,
        overrides?: Overrides
      ): Promise<BigNumber>;
  
      powerBoosterId(
        arg0: string,
        arg1: BigNumberish,
        arg2: BigNumberish,
        overrides?: CallOverrides
      ): Promise<BigNumber>;
  
      "powerBoosterId(address,uint256,uint256)"(
        arg0: string,
        arg1: BigNumberish,
        arg2: BigNumberish,
        overrides?: CallOverrides
      ): Promise<BigNumber>;
  
      prepaidEs(overrides?: CallOverrides): Promise<BigNumber>;
  
      "prepaidEs()"(overrides?: CallOverrides): Promise<BigNumber>;
    };
  
    populateTransaction: {
      AllowedWES(
        arg0: string,
        overrides?: CallOverrides
      ): Promise<PopulatedTransaction>;
  
      "AllowedWES(address)"(
        arg0: string,
        overrides?: CallOverrides
      ): Promise<PopulatedTransaction>;
  
      ClaimedWES(
        arg0: string,
        overrides?: CallOverrides
      ): Promise<PopulatedTransaction>;
  
      "ClaimedWES(address)"(
        arg0: string,
        overrides?: CallOverrides
      ): Promise<PopulatedTransaction>;
  
      ConvertWES(
        _amount: BigNumberish,
        overrides?: Overrides
      ): Promise<PopulatedTransaction>;
  
      "ConvertWES(uint256)"(
        _amount: BigNumberish,
        overrides?: Overrides
      ): Promise<PopulatedTransaction>;
  
      lastWithdrawMonthID(
        arg0: string,
        arg1: BigNumberish,
        overrides?: CallOverrides
      ): Promise<PopulatedTransaction>;
  
      "lastWithdrawMonthID(address,uint256)"(
        arg0: string,
        arg1: BigNumberish,
        overrides?: CallOverrides
      ): Promise<PopulatedTransaction>;
  
      monthlyAnnuity(
        _stakerAddress: string,
        _petId: BigNumberish,
        _endAnnuityMonthId: BigNumberish,
        overrides?: Overrides
      ): Promise<PopulatedTransaction>;
  
      "monthlyAnnuity(address,uint256,uint256)"(
        _stakerAddress: string,
        _petId: BigNumberish,
        _endAnnuityMonthId: BigNumberish,
        overrides?: Overrides
      ): Promise<PopulatedTransaction>;
  
      pet(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  
      "pet()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  
      powerBooster(
        _stakerAddress: string,
        _petId: BigNumberish,
        _powerBoosterId: BigNumberish,
        overrides?: Overrides
      ): Promise<PopulatedTransaction>;
  
      "powerBooster(address,uint256,uint256)"(
        _stakerAddress: string,
        _petId: BigNumberish,
        _powerBoosterId: BigNumberish,
        overrides?: Overrides
      ): Promise<PopulatedTransaction>;
  
      powerBoosterId(
        arg0: string,
        arg1: BigNumberish,
        arg2: BigNumberish,
        overrides?: CallOverrides
      ): Promise<PopulatedTransaction>;
  
      "powerBoosterId(address,uint256,uint256)"(
        arg0: string,
        arg1: BigNumberish,
        arg2: BigNumberish,
        overrides?: CallOverrides
      ): Promise<PopulatedTransaction>;
  
      prepaidEs(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  
      "prepaidEs()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
  }
  