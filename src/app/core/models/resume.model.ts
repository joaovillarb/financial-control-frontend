import {Budget} from "./budget.model";

export class Resume {
  constructor(
    accountId: string = '',
    budgets: Budget[] = [],
    totalSpent: number = 0,
    totalMustSpent: number = 0,
    utilized: number = 0
  ) {
    this._accountId = accountId;
    this._budgets = budgets;
    this._totalSpent = totalSpent;
    this._totalMustSpent = totalMustSpent;
    this._utilized = utilized;
  }


  private _accountId: string;

  get accountId(): string {
    return this._accountId;
  }

  set accountId(value: string) {
    this._accountId = value;
  }

  private _budgets: Budget[];

  get budgets(): Budget[] {
    return this._budgets;
  }

  set budgets(value: Budget[]) {
    this._budgets = value;
  }

  private _totalSpent: number;

  get totalSpent(): number {
    return this._totalSpent;
  }

  set totalSpent(value: number) {
    this._totalSpent = value;
  }

  private _totalMustSpent: number;

  get totalMustSpent(): number {
    return this._totalMustSpent;
  }

  set totalMustSpent(value: number) {
    this._totalMustSpent = value;
  }

  private _utilized: number;

  get utilized(): number {
    return this._utilized;
  }

  set utilized(value: number) {
    this._utilized = value;
  }
}
