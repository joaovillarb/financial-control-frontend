import {Category} from "./category.model";

export class Goal {
  constructor(
    mustSpentPercentage: number = 0,
    account: any = null,
    category: Category = new Category()
  ) {
    this._mustSpentPercentage = mustSpentPercentage;
    this._account = account;
    this._category = category;
  }

  private _mustSpentPercentage: number;

  get mustSpentPercentage(): number {
    return this._mustSpentPercentage;
  }

  set mustSpentPercentage(value: number) {
    this._mustSpentPercentage = value;
  }

  private _account: any;

  get account(): any {
    return this._account;
  }

  set account(value: any) {
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
