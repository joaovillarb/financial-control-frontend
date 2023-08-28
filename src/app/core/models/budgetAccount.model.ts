import {Account} from "./account.model";
import {Category} from "./category.model";

export class BudgetAccount {
  constructor(
    date: string,
    spent: number,
    description: string,
    account: Account,
    category: Category
  ) {
    this._date = date;
    this._spent = spent;
    this._description = description;
    this._account = account;
    this._category = category;
  }

  private _date: string;

  get date(): string {
    return this._date;
  }

  set date(value: string) {
    this._date = value;
  }

  private _spent: number;

  get spent(): number {
    return this._spent;
  }

  set spent(value: number) {
    this._spent = value;
  }

  private _description: string;

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  private _account: Account;

  get account(): Account {
    return this._account;
  }

  set account(value: Account) {
    this._account = value;
  }

  private _category: Category;

  get category(): Category {
    return this._category;
  }

  set category(value: Category) {
    this._category = value;
  }
}
