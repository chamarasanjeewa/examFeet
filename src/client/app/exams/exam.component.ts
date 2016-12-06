import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ExamService } from '../services/examService';

@Component({
    moduleId: module.id,
    selector: 'sd-exam',
    templateUrl: 'exam.component.html',
    styleUrls: ['exam.component.css'],
    providers: [ExamService]
})

export class ExamComponent implements OnInit {
    exam: any;

    constructor(public fb: FormBuilder,
        private route: ActivatedRoute,
        public router: Router,
        public examService: ExamService) {

        console.log('controller - exam ..')

        this.exam = JSON.parse(sessionStorage.getItem('exam') || '{}');
    }

    ngOnInit() {
        console.log('exam');
        debugger;
        this.route.params
            .switchMap((params: Params) => {
                debugger;
                if (!this.exam || !this.exam.serviceId || !this.exam.serviceId || this.exam.serviceId != +params['id']) {
                    debugger;
                    this.router.navigateByUrl('/exams');
                    return Observable.throw('exam mismatch ...');
                }

                return this.examService.getExamInfo({ serviceId: this.exam.serviceId });
            })
            .subscribe(res => {
                console.log(res);
                Object.assign(this.exam, res);
            }, error => {
                console.log(error);
            });
    }
}
