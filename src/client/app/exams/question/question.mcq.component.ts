import { Observable, Observer } from 'rxjs/Rx';
import { Component, OnInit, Input, Output } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { QuestionAnswerComponent, ANSWER_TYPE, ANSWER_EVALUATION_TYPE } from './index';

@Component({
    moduleId: module.id,
    selector: 'sd-question-mcq',
    templateUrl: 'question.mcq.component.html',
    styleUrls: ['question.mcq.component.css'],
    providers: [{ provide: QuestionAnswerComponent, useExisting: QuestionMcqComponent }]
})

export class QuestionMcqComponent extends QuestionAnswerComponent implements OnInit {

    @Input() question: any;
    protected evaluations: any[];

    protected get value(): any {
        return this.form.value.answer;
    }

    constructor(public fb: FormBuilder) {
        super();
              
    }

    protected createForm(): FormGroup {
       
        var form = this.fb.group({});
        form.addControl('answer', new FormControl(''));
        return form;
    }

    protected evaluateChoicesAndShowAnswers(): void {
        
        this.evaluations = this.choices.map((elm: any) => {
            return elm.type === ANSWER_TYPE.CORRECT ? ANSWER_EVALUATION_TYPE.CORRECT
                : elm.content === this.value ? ANSWER_EVALUATION_TYPE.WRONG
                    : ANSWER_EVALUATION_TYPE.NONE;
        });
    }

    public getAnswer(): Observable<any> {
       
        
        return (new Observable<any>((observer: any) => {
            if (!this.form.valid) { observer.error('form is not valid'); }
            else {
                let result = this.question.answers
                    .filter((elm: any) => { return elm.content === this.value; })
                    .filter((elm: any) => { return elm.type === ANSWER_TYPE.CORRECT; })
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
