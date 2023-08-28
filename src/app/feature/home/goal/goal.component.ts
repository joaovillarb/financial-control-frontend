import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Goal} from "../../../core/models/goal.model";
import {GoalService} from "../../../core/services/goal.service";

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent {
  goalsData: Goal[] = [];

  constructor(private route: ActivatedRoute, private goalService: GoalService) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      // const login = params['login'];
      const login = 'joaovillarb@gmail.com';
      this.goalService.getGoalsByLogin(login).subscribe(data => {
        this.goalsData = data;
      });
    });
  }
}
