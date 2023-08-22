import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Resume} from '../models/resume.model';
import {Budget} from "../models/budget.model";

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  private baseUrl = 'http://localhost:8080/financial-control/api/account/detail';

  constructor(private http: HttpClient) {
  }

  getResume(login: string): Observable<Resume> {
    const url = `${this.baseUrl}?login=${login}`;
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
