import {Component, Input, OnInit} from '@angular/core';
import {Resume} from "../../../core/models/resume.model";

@Component({
    selector: 'app-resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
    @Input() resumeData: Resume = new Resume();

    ngOnInit(): void {
    }

}
