// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class DailyDataForMarket extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("poolTokenAddress", Value.fromBytes(Bytes.empty()));
    this.set("startingBorrowBalanceOnPool", Value.fromBigInt(BigInt.zero()));
    this.set("startingBorrowBalanceInP2P", Value.fromBigInt(BigInt.zero()));
    this.set("netBorrowAddedOnPool", Value.fromBigInt(BigInt.zero()));
    this.set("netBorrowAddedInP2P", Value.fromBigInt(BigInt.zero()));
    this.set("startingSupplyBalanceOnPool", Value.fromBigInt(BigInt.zero()));
    this.set("startingSupplyBalanceInP2P", Value.fromBigInt(BigInt.zero()));
    this.set("netSupplyAddedOnPool", Value.fromBigInt(BigInt.zero()));
    this.set("netSupplyAddedInP2P", Value.fromBigInt(BigInt.zero()));
    this.set("userCount", Value.fromBigInt(BigInt.zero()));
    this.set("newUsers", Value.fromBigInt(BigInt.zero()));
    this.set("date", Value.fromI32(0));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save DailyDataForMarket entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save DailyDataForMarket entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("DailyDataForMarket", id.toString(), this);
    }
  }

  static load(id: string): DailyDataForMarket | null {
    return changetype<DailyDataForMarket | null>(
      store.get("DailyDataForMarket", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get poolTokenAddress(): Bytes {
    let value = this.get("poolTokenAddress");
    return value!.toBytes();
  }

  set poolTokenAddress(value: Bytes) {
    this.set("poolTokenAddress", Value.fromBytes(value));
  }

  get startingBorrowBalanceOnPool(): BigInt {
    let value = this.get("startingBorrowBalanceOnPool");
    return value!.toBigInt();
  }

  set startingBorrowBalanceOnPool(value: BigInt) {
    this.set("startingBorrowBalanceOnPool", Value.fromBigInt(value));
  }

  get startingBorrowBalanceInP2P(): BigInt {
    let value = this.get("startingBorrowBalanceInP2P");
    return value!.toBigInt();
  }

  set startingBorrowBalanceInP2P(value: BigInt) {
    this.set("startingBorrowBalanceInP2P", Value.fromBigInt(value));
  }

  get netBorrowAddedOnPool(): BigInt {
    let value = this.get("netBorrowAddedOnPool");
    return value!.toBigInt();
  }

  set netBorrowAddedOnPool(value: BigInt) {
    this.set("netBorrowAddedOnPool", Value.fromBigInt(value));
  }

  get netBorrowAddedInP2P(): BigInt {
    let value = this.get("netBorrowAddedInP2P");
    return value!.toBigInt();
  }

  set netBorrowAddedInP2P(value: BigInt) {
    this.set("netBorrowAddedInP2P", Value.fromBigInt(value));
  }

  get startingSupplyBalanceOnPool(): BigInt {
    let value = this.get("startingSupplyBalanceOnPool");
    return value!.toBigInt();
  }

  set startingSupplyBalanceOnPool(value: BigInt) {
    this.set("startingSupplyBalanceOnPool", Value.fromBigInt(value));
  }

  get startingSupplyBalanceInP2P(): BigInt {
    let value = this.get("startingSupplyBalanceInP2P");
    return value!.toBigInt();
  }

  set startingSupplyBalanceInP2P(value: BigInt) {
    this.set("startingSupplyBalanceInP2P", Value.fromBigInt(value));
  }

  get netSupplyAddedOnPool(): BigInt {
    let value = this.get("netSupplyAddedOnPool");
    return value!.toBigInt();
  }

  set netSupplyAddedOnPool(value: BigInt) {
    this.set("netSupplyAddedOnPool", Value.fromBigInt(value));
  }

  get netSupplyAddedInP2P(): BigInt {
    let value = this.get("netSupplyAddedInP2P");
    return value!.toBigInt();
  }

  set netSupplyAddedInP2P(value: BigInt) {
    this.set("netSupplyAddedInP2P", Value.fromBigInt(value));
  }

  get userCount(): BigInt {
    let value = this.get("userCount");
    return value!.toBigInt();
  }

  set userCount(value: BigInt) {
    this.set("userCount", Value.fromBigInt(value));
  }

  get newUsers(): BigInt {
    let value = this.get("newUsers");
    return value!.toBigInt();
  }

  set newUsers(value: BigInt) {
    this.set("newUsers", Value.fromBigInt(value));
  }

  get date(): i32 {
    let value = this.get("date");
    return value!.toI32();
  }

  set date(value: i32) {
    this.set("date", Value.fromI32(value));
  }
}

export class AllTimeDataForMarket extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("poolTokenAddress", Value.fromBytes(Bytes.empty()));
    this.set("netBorrowAddedOnPool", Value.fromBigInt(BigInt.zero()));
    this.set("netBorrowAddedInP2P", Value.fromBigInt(BigInt.zero()));
    this.set("netSupplyAddedOnPool", Value.fromBigInt(BigInt.zero()));
    this.set("netSupplyAddedInP2P", Value.fromBigInt(BigInt.zero()));
    this.set("userCount", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save AllTimeDataForMarket entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save AllTimeDataForMarket entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("AllTimeDataForMarket", id.toString(), this);
    }
  }

  static load(id: string): AllTimeDataForMarket | null {
    return changetype<AllTimeDataForMarket | null>(
      store.get("AllTimeDataForMarket", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get poolTokenAddress(): Bytes {
    let value = this.get("poolTokenAddress");
    return value!.toBytes();
  }

  set poolTokenAddress(value: Bytes) {
    this.set("poolTokenAddress", Value.fromBytes(value));
  }

  get netBorrowAddedOnPool(): BigInt {
    let value = this.get("netBorrowAddedOnPool");
    return value!.toBigInt();
  }

  set netBorrowAddedOnPool(value: BigInt) {
    this.set("netBorrowAddedOnPool", Value.fromBigInt(value));
  }

  get netBorrowAddedInP2P(): BigInt {
    let value = this.get("netBorrowAddedInP2P");
    return value!.toBigInt();
  }

  set netBorrowAddedInP2P(value: BigInt) {
    this.set("netBorrowAddedInP2P", Value.fromBigInt(value));
  }

  get netSupplyAddedOnPool(): BigInt {
    let value = this.get("netSupplyAddedOnPool");
    return value!.toBigInt();
  }

  set netSupplyAddedOnPool(value: BigInt) {
    this.set("netSupplyAddedOnPool", Value.fromBigInt(value));
  }

  get netSupplyAddedInP2P(): BigInt {
    let value = this.get("netSupplyAddedInP2P");
    return value!.toBigInt();
  }

  set netSupplyAddedInP2P(value: BigInt) {
    this.set("netSupplyAddedInP2P", Value.fromBigInt(value));
  }

  get userCount(): BigInt {
    let value = this.get("userCount");
    return value!.toBigInt();
  }

  set userCount(value: BigInt) {
    this.set("userCount", Value.fromBigInt(value));
  }
}

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("date", Value.fromI32(0));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save User entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save User entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("User", id.toString(), this);
    }
  }

  static load(id: string): User | null {
    return changetype<User | null>(store.get("User", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get date(): i32 {
    let value = this.get("date");
    return value!.toI32();
  }

  set date(value: i32) {
    this.set("date", Value.fromI32(value));
  }
}
