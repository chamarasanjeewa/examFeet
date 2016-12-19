import { Observable, Observer } from 'rxjs/Rx';
import { Component, OnInit, Input, Output } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { QuestionAnswerComponent, MCQ_QUESTION_ANSWER_TYPE } from './index';

@Component({
    moduleId: module.id,
    selector: 'sd-question-mcq',
    templateUrl: 'question.mcq.component.html',
    styleUrls: ['question.mcq.component.css'],
    providers: [{ provide: QuestionAnswerComponent, useExisting: QuestionMcqComponent }]
})



export class QuestionMcqComponent extends QuestionAnswerComponent implements OnInit {

    @Input() question: any;

    constructor(public fb: FormBuilder) {
        super();

    }

    buildForm() {
        this.form = this.fb.group({});
        this.form.addControl('answer', new FormControl(''));
    }

    public getAnswer(): Observable<any> {
        return (new Observable<any>((observer: any) => {
            if (!this.form.valid) { observer.error('form is not valid'); }
            else {
              
                let userAnswer: any = this.form.value;
                let result = this.question.answers
                    .filter((elm: any) => { return elm.content === userAnswer.answer; })
                    .filter((elm: any) => { return elm.type === MCQ_QUESTION_ANSWER_TYPE.CORRECT; })
                    .length > 0;

                
                observer.next(result);
                observer.complete();
            }
        }));
    }

    ngOnInit() {

        this.buildForm();
    }
}
