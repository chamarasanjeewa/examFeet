import { Observable, Observer } from 'rxjs/Rx';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { QuestionAnswerComponent, ANSWER_TYPE, ANSWER_EVALUATION_TYPE } from './index';

@Component({
    moduleId: module.id,
    selector: 'sd-question-truefalse',
    templateUrl: 'question.truefalse.component.html',
    styleUrls: ['question.truefalse.component.css'],
    providers: [{ provide: QuestionAnswerComponent, useExisting: QuestionTrueFalseComponent }]
})

export class QuestionTrueFalseComponent extends QuestionAnswerComponent implements OnInit {

    @Input() question: any;
    protected evaluations: any[];
    protected get value(): any {
        return Object.values(this.form.value);
    }

    constructor(public fb: FormBuilder) {
        super();
       

    }

    protected createForm(): FormGroup {         
        var form = this.fb.group({});
        for (let idx in this.choices) {
            form.addControl('answer[' + idx + ']', new FormControl(false));
        }
        return form;
    }

    protected evaluateChoicesAndShowAnswers(): void { 
        this.evaluations = this.choices.map((elm: any, idx: number) => {
            return (elm.type === ANSWER_TYPE.TRUE) ? ANSWER_EVALUATION_TYPE.CORRECT
                : (elm.type === ANSWER_TYPE.FALSE && !!this.value[idx]) ? ANSWER_EVALUATION_TYPE.WRONG
                    : ANSWER_EVALUATION_TYPE.NONE;
        });
    }


    public getAnswer(): Observable<any> {         
        return (new Observable<any>((observer: any) => {
            if (!this.form.valid) { observer.error('form is not valid'); }
            else {
                let result = this.choices
                    .filter((elm: any, idx: number) => {
                        return (!!this.value[idx] && elm.type === ANSWER_TYPE.TRUE)
                            || (!this.value[idx] && elm.type === ANSWER_TYPE.FALSE);
                    }).length === this.choices.length;

                observer.next(result);
                observer.complete();
            }
        }));
    }

    ngOnInit() {
         

        this.buildForm();
    }
}
