// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class BPYUpdated extends ethereum.Event {
  get params(): BPYUpdated__Params {
    return new BPYUpdated__Params(this);
  }
}

export class BPYUpdated__Params {
  _event: BPYUpdated;

  constructor(event: BPYUpdated) {
    this._event = event;
  }

  get _marketAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _newValue(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class MarketCreated extends ethereum.Event {
  get params(): MarketCreated__Params {
    return new MarketCreated__Params(this);
  }
}

export class MarketCreated__Params {
  _event: MarketCreated;

  constructor(event: MarketCreated) {
    this._event = event;
  }

  get _marketAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class MaxNumberUpdated extends ethereum.Event {
  get params(): MaxNumberUpdated__Params {
    return new MaxNumberUpdated__Params(this);
  }
}

export class MaxNumberUpdated__Params {
  _event: MaxNumberUpdated;

  constructor(event: MaxNumberUpdated) {
    this._event = event;
  }

  get _newValue(): i32 {
    return this._event.parameters[0].value.toI32();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class P2PUnitExchangeRateUpdated extends ethereum.Event {
  get params(): P2PUnitExchangeRateUpdated__Params {
    return new P2PUnitExchangeRateUpdated__Params(this);
  }
}

export class P2PUnitExchangeRateUpdated__Params {
  _event: P2PUnitExchangeRateUpdated;

  constructor(event: P2PUnitExchangeRateUpdated) {
    this._event = event;
  }

  get _marketAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _newValue(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class PositionsManagerForCompoundSet extends ethereum.Event {
  get params(): PositionsManagerForCompoundSet__Params {
    return new PositionsManagerForCompoundSet__Params(this);
  }
}

export class PositionsManagerForCompoundSet__Params {
  _event: PositionsManagerForCompoundSet;

  constructor(event: PositionsManagerForCompoundSet) {
    this._event = event;
  }

  get _positionsManagerForCompound(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class ThresholdUpdated extends ethereum.Event {
  get params(): ThresholdUpdated__Params {
    return new ThresholdUpdated__Params(this);
  }
}

export class ThresholdUpdated__Params {
  _event: ThresholdUpdated;

  constructor(event: ThresholdUpdated) {
    this._event = event;
  }

  get _marketAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _newValue(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class MarketsManager extends ethereum.SmartContract {
  static bind(address: Address): MarketsManager {
    return new MarketsManager("MarketsManager", address);
  }

  isCreated(param0: Address): boolean {
    let result = super.call("isCreated", "isCreated(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_isCreated(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("isCreated", "isCreated(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  lastUpdateBlockNumber(param0: Address): BigInt {
    let result = super.call(
      "lastUpdateBlockNumber",
      "lastUpdateBlockNumber(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBigInt();
  }

  try_lastUpdateBlockNumber(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "lastUpdateBlockNumber",
      "lastUpdateBlockNumber(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  p2pBPY(param0: Address): BigInt {
    let result = super.call("p2pBPY", "p2pBPY(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBigInt();
  }

  try_p2pBPY(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("p2pBPY", "p2pBPY(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  p2pUnitExchangeRate(param0: Address): BigInt {
    let result = super.call(
      "p2pUnitExchangeRate",
      "p2pUnitExchangeRate(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBigInt();
  }

  try_p2pUnitExchangeRate(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "p2pUnitExchangeRate",
      "p2pUnitExchangeRate(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  positionsManagerForCompound(): Address {
    let result = super.call(
      "positionsManagerForCompound",
      "positionsManagerForCompound():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_positionsManagerForCompound(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "positionsManagerForCompound",
      "positionsManagerForCompound():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  updateP2pUnitExchangeRate(_marketAddress: Address): BigInt {
    let result = super.call(
      "updateP2pUnitExchangeRate",
      "updateP2pUnitExchangeRate(address):(uint256)",
      [ethereum.Value.fromAddress(_marketAddress)]
    );

    return result[0].toBigInt();
  }

  try_updateP2pUnitExchangeRate(
    _marketAddress: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "updateP2pUnitExchangeRate",
      "updateP2pUnitExchangeRate(address):(uint256)",
      [ethereum.Value.fromAddress(_marketAddress)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class CreateMarketCall extends ethereum.Call {
  get inputs(): CreateMarketCall__Inputs {
    return new CreateMarketCall__Inputs(this);
  }

  get outputs(): CreateMarketCall__Outputs {
    return new CreateMarketCall__Outputs(this);
  }
}

export class CreateMarketCall__Inputs {
  _call: CreateMarketCall;

  constructor(call: CreateMarketCall) {
    this._call = call;
  }

  get _marketAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _threshold(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class CreateMarketCall__Outputs {
  _call: CreateMarketCall;

  constructor(call: CreateMarketCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetMaxNumberOfUsersInTreeCall extends ethereum.Call {
  get inputs(): SetMaxNumberOfUsersInTreeCall__Inputs {
    return new SetMaxNumberOfUsersInTreeCall__Inputs(this);
  }

  get outputs(): SetMaxNumberOfUsersInTreeCall__Outputs {
    return new SetMaxNumberOfUsersInTreeCall__Outputs(this);
  }
}

export class SetMaxNumberOfUsersInTreeCall__Inputs {
  _call: SetMaxNumberOfUsersInTreeCall;

  constructor(call: SetMaxNumberOfUsersInTreeCall) {
    this._call = call;
  }

  get _newMaxNumber(): i32 {
    return this._call.inputValues[0].value.toI32();
  }
}

export class SetMaxNumberOfUsersInTreeCall__Outputs {
  _call: SetMaxNumberOfUsersInTreeCall;

  constructor(call: SetMaxNumberOfUsersInTreeCall) {
    this._call = call;
  }
}

export class SetPositionsManagerCall extends ethereum.Call {
  get inputs(): SetPositionsManagerCall__Inputs {
    return new SetPositionsManagerCall__Inputs(this);
  }

  get outputs(): SetPositionsManagerCall__Outputs {
    return new SetPositionsManagerCall__Outputs(this);
  }
}

export class SetPositionsManagerCall__Inputs {
  _call: SetPositionsManagerCall;

  constructor(call: SetPositionsManagerCall) {
    this._call = call;
  }

  get _positionsManagerForCompound(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetPositionsManagerCall__Outputs {
  _call: SetPositionsManagerCall;

  constructor(call: SetPositionsManagerCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UpdateBPYCall extends ethereum.Call {
  get inputs(): UpdateBPYCall__Inputs {
    return new UpdateBPYCall__Inputs(this);
  }

  get outputs(): UpdateBPYCall__Outputs {
    return new UpdateBPYCall__Outputs(this);
  }
}

export class UpdateBPYCall__Inputs {
  _call: UpdateBPYCall;

  constructor(call: UpdateBPYCall) {
    this._call = call;
  }

  get _marketAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpdateBPYCall__Outputs {
  _call: UpdateBPYCall;

  constructor(call: UpdateBPYCall) {
    this._call = call;
  }
}

export class UpdateP2pUnitExchangeRateCall extends ethereum.Call {
  get inputs(): UpdateP2pUnitExchangeRateCall__Inputs {
    return new UpdateP2pUnitExchangeRateCall__Inputs(this);
  }

  get outputs(): UpdateP2pUnitExchangeRateCall__Outputs {
    return new UpdateP2pUnitExchangeRateCall__Outputs(this);
  }
}

export class UpdateP2pUnitExchangeRateCall__Inputs {
  _call: UpdateP2pUnitExchangeRateCall;

  constructor(call: UpdateP2pUnitExchangeRateCall) {
    this._call = call;
  }

  get _marketAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpdateP2pUnitExchangeRateCall__Outputs {
  _call: UpdateP2pUnitExchangeRateCall;

  constructor(call: UpdateP2pUnitExchangeRateCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class UpdateThresholdCall extends ethereum.Call {
  get inputs(): UpdateThresholdCall__Inputs {
    return new UpdateThresholdCall__Inputs(this);
  }

  get outputs(): UpdateThresholdCall__Outputs {
    return new UpdateThresholdCall__Outputs(this);
  }
}

export class UpdateThresholdCall__Inputs {
  _call: UpdateThresholdCall;

  constructor(call: UpdateThresholdCall) {
    this._call = call;
  }

  get _marketAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _newThreshold(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class UpdateThresholdCall__Outputs {
  _call: UpdateThresholdCall;

  constructor(call: UpdateThresholdCall) {
    this._call = call;
  }
}
