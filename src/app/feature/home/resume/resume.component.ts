import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ResumeService} from "../../../core/services/resume.service";
import {Resume} from "../../../core/models/resume.model";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  resumeData: Resume = new Resume();

  constructor(private route: ActivatedRoute, private resumeService: ResumeService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      // const login = params['login'];
      const login = 'joaovillarb@gmail.com';
      this.resumeService.getResume(login).subscribe(data => {
        this.resumeData = data;
      });
    });
  }
}
