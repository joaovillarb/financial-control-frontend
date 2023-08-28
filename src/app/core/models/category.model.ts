export class Category {
  constructor(
    name: string = '',
    description: string = ''
  ) {
    this._name = name;
    this._description = description;
  }

  private _name: string;

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  private _description: string;

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }
}
