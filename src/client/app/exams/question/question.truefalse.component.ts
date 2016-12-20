import { Observable, Observer } from 'rxjs/Rx';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { QuestionAnswerComponent, TRUE_FALSE_QUESTION_ANSWER_TYPE } from './index';

@Component({
    moduleId: module.id,
    selector: 'sd-question-truefalse',
    templateUrl: 'question.truefalse.component.html',
    styleUrls: ['question.truefalse.component.css'],
    providers: [{ provide: QuestionAnswerComponent, useExisting: QuestionTrueFalseComponent }]
})

export class QuestionTrueFalseComponent extends QuestionAnswerComponent implements OnInit {

    @Input() question: any;

    constructor(public fb: FormBuilder) {
        super();

    }

    protected buildForm() {

        this.form = this.fb.group({});

        for (let idx in this.question.answers) {
            this.form.addControl('answer[' + idx + ']', new FormControl(false));
        }
    }

    public getAnswer(): Observable<any> {

        return (new Observable<any>((observer: any) => {
            if (!this.form.valid) { observer.error('form is not valid'); }
            else {
             
                let userAnswers: any[] = Object.values(this.form.value);
                let result = this.question.answers
                    .filter((elm: any, idx: number) => {
                        return (!!userAnswers[idx] && elm.type === TRUE_FALSE_QUESTION_ANSWER_TYPE.TRUE)
                            || (!userAnswers[idx] && elm.type === TRUE_FALSE_QUESTION_ANSWER_TYPE.FALSE);
                    })
                    .length === this.question.answers.length;
               
                observer.next(result);
                observer.complete();
            }
        }));
    }

    ngOnInit() {

        this.buildForm();
    }
}
