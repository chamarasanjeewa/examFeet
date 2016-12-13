import { Observable } from 'rxjs/Rx';
import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ExamService } from '../../../services/examService';

@Component({
    moduleId: module.id,
    selector: 'sd-exam-start',
    templateUrl: 'start.component.html',
    styleUrls: ['start.component.css'],
    providers: [ExamService]
})

export class StartComponent implements OnInit {
    exam: any;
    @Output() questions: any[];

    constructor(public fb: FormBuilder,
        private route: ActivatedRoute,
        public router: Router,
        public examService: ExamService) {
        debugger;
        console.log("StartComponent: ExamTryComponent");
        this.exam = JSON.parse(sessionStorage.getItem('exam') || '{}');
    }

    ngOnInit() {
        debugger;
        console.log("constructor: StartComponent");

        if (!this.exam) {
            this.router.navigateByUrl('/exams');
        }

        this.examService.getSampleExamQuestions({ serviceId: this.exam.serviceId }).subscribe(res => {
            this.questions = res;
        });
    }
}
