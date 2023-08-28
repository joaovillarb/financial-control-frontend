import {Goal} from "./goal.model";
import {Person} from "./person.model";
import {BudgetAccount} from "./budgetAccount.model";

export class Account {
  constructor(
    login: string = '',
    password: string = '',
    salary: number = 0,
    person: Person = new Person(),
    budgetList: BudgetAccount[] = [],
    goalList: Goal[] = []
  ) {
    this._login = login;
    this._password = password;
    this._salary = salary;
    this._person = person;
    this._budgetList = budgetList;
    this._goalList = goalList;
  }

  private _login: string;

  get login(): string {
    return this._login;
  }

  set login(value: string) {
    this._login = value;
  }

  private _password: string;

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  private _salary: number;

  get salary(): number {
    return this._salary;
  }

  set salary(value: number) {
    this._salary = value;
  }

  private _person: Person;

  get person(): Person {
    return this._person;
  }

  set person(value: Person) {
    this._person = value;
  }

  private _budgetList: BudgetAccount[];

  get budgetList(): BudgetAccount[] {
    return this._budgetList;
  }

  set budgetList(value: BudgetAccount[]) {
    this._budgetList = value;
  }

  private _goalList: Goal[];

  get goalList(): Goal[] {
    return this._goalList;
  }

  set goalList(value: Goal[]) {
    this._goalList = value;
  }
}
