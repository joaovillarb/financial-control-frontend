import {Component} from '@angular/core';
import {Account} from "../../core/models/account.model";
import {ActivatedRoute} from "@angular/router";
import {AccountService} from "../../core/services/account.service";
import {Resume} from "../../core/models/resume.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  accountData: Account = new Account();
  resumeData: Resume = new Resume();

  constructor(private route: ActivatedRoute, private accountService: AccountService) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      // const login = params['login'];
      const login = 'joaovillarb@gmail.com';
      this.accountService.getAccount(login).subscribe(data => this.accountData = data);
      this.accountService.getResume(login).subscribe(data => this.resumeData = data);
    });
  }

  saveNewSalary() {
    console.log('Old salary:', this.accountData.salary);
    this.route.queryParams.subscribe(params => {
      this.accountService.patchSalary(this.accountData.login, this.accountData.salary)
        .subscribe(data => {
          this.accountData = data
          this.resumeData.totalMustSpent = data.salary;
        });
    });
  }
}
