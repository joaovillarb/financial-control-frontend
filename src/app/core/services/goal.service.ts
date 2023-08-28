import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Goal} from "../models/goal.model";
import {Category} from "../models/category.model";

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  constructor(private http: HttpClient) {
  }

  getGoalsByLogin(login: string): Observable<Goal[]> {
    const url = `/goal?login=${login}`;
    return this.http.get<any[]>(url).pipe(
      map(goals => {
        return goals.map(goal => {
          console.log(goal)
          return new Goal(
            goal.mustSpentPercentage,
            goal.account,
            new Category(goal.category.name, goal.category.description)
          );
        });
      })
    );
  }
}
