import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Resume} from '../models/resume.model';
import {Budget} from "../models/budget.model";
import {Account} from "../models/account.model";
import {Person} from "../models/person.model";
import {BudgetAccount} from "../models/budgetAccount.model";
import {Category} from "../models/category.model";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) {
  }

  getAccount(login: string): Observable<Account> {
    const url = `/account/login?login=${login}`;
    return this.http.get<any>(url).pipe(
      map(response => {
        return new Account(
          response.login,
          response.password,
          response.salary,
          new Person(
            response.person.name
          ),
          response.budgetList.map(
            (budget: any) =>
              new BudgetAccount(
                budget.date,
                budget.spent,
                budget.description,
                budget.account,
                new Category(budget.category.name, budget.category.description)
              )
          ),
        );
      })
    );
  }

  patchSalary(login: string, salary: number): Observable<Account> {
    const url = `/account`;
    const requestBody = {
      login: login,
      salary: salary
    };
    return this.http.patch<any>(url, requestBody).pipe(
      map(response => {
        return new Account(
          response.login,
          response.password,
          response.salary,
          new Person(
            response.person.name
          )
        );
      })
    );
  }

  getResume(login: string): Observable<Resume> {
    const url = `/account/detail?login=${login}`;
    return this.http.get<any>(url).pipe(
      map(response => {
        return new Resume(
          response.accountId,
          response.budgets.map(
            (budget: any) =>
              new Budget(
                budget.name,
                budget.spent,
                budget.mustSpent,
                budget.percentUsed,
                budget.percentTotal
              )
          ),
          response.totalSpent,
          response.totalMustSpent,
          response.utilized
        );
      })
    );
  }
}
