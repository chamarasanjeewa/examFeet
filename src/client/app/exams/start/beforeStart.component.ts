import { Observable } from 'rxjs/Rx';
import { Component, OnInit, Input, Output, EventEmitter, QueryList } from '@angular/core';
import { AfterViewInit, ViewChild, ViewChildren } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ExamService } from '../../services/examService';
import { ILiteEvent } from '../../utilities/ILiteEvent'
import { LiteEvent } from '../../utilities/LiteEvent'
import { CountDownTimer } from '../../utilities/CountDownTimer'
import { ItemsCarousel } from '../../utilities/ItemsCarousel'
import { QuestionAnswerComponent, QuestionMcqComponent, QuestionTrueFalseComponent, QuestionTypeComponent, QuestionType, QUESTION_TYPE } from './index';


@Component({
    moduleId: module.id,
    selector: 'sd-exam-start',
    templateUrl: 'beforeStart.component.html',
    styleUrls: ['start.component.css'],
    providers: [ExamService]
})

export class BeforeStartComponent implements OnInit {
    private _examId: number;

    constructor(public fb: FormBuilder,
        private route: ActivatedRoute,
        public router: Router) {

    }


    public start(): void {
        this.router.navigateByUrl('/exams/' + this._examId + '/start');
    }

    ngOnInit() {
        this.route.params
            .subscribe((params: Params) => {
                this._examId = +params['id'];
            });
    }
}
