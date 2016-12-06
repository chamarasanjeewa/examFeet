import { Component, OnInit, Input } from '@angular/core';
// import { Router } from '@angular/router';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { QUESTION_TYPE, QuestionType } from './question.constants';

@Component({
    moduleId: module.id,
    selector: 'sd-question',
    templateUrl: 'question.component.html',
    styleUrls: ['question.component.css'],
    providers: []
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
