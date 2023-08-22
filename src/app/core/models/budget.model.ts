export class Budget {
  constructor(
    name: string,
    spent: number,
    mustSpent: number,
    percentUsed: number,
    percentTotal: number
  ) {
    this._name = name;
    this._spent = spent;
    this._mustSpent = mustSpent;
    this._percentUsed = percentUsed;
    this._percentTotal = percentTotal;
  }

  private _name: string;

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  private _spent: number;

  get spent(): number {
    return this._spent;
  }

  set spent(value: number) {
    this._spent = value;
  }

  private _mustSpent: number;

  get mustSpent(): number {
    return this._mustSpent;
  }

  set mustSpent(value: number) {
    this._mustSpent = value;
  }

  private _percentUsed: number;

  get percentUsed(): number {
    return this._percentUsed;
  }

  set percentUsed(value: number) {
    this._percentUsed = value;
  }

  private _percentTotal: number;

  get percentTotal(): number {
    return this._percentTotal;
  }

  set percentTotal(value: number) {
    this._percentTotal = value;
  }
}
