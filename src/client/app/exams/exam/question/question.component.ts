import { Component, OnInit, Input } from '@angular/core';
import { QUESTION_TYPE, QuestionType } from './index';

@Component({
    moduleId: module.id,
    selector: 'sd-question',
    templateUrl: 'question.component.html',
    styleUrls: ['question.component.css']
})

export class QuestionComponent implements OnInit {

    @Input() question: any;
    QUESTION_TYPE: QuestionType;
    answer: any = {};

    constructor() {

    }

    ngOnInit() {

    }



}
