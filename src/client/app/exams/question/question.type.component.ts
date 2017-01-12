import { Observable, Observer } from 'rxjs/Rx';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { QuestionAnswerComponent, ANSWER_TYPE, ANSWER_EVALUATION_TYPE } from './index';


@Component({
    moduleId: module.id,
    selector: 'sd-question-type',
    templateUrl: 'question.type.component.html',
    styleUrls: ['question.type.component.css'],
    providers: [{ provide: QuestionAnswerComponent, useExisting: QuestionTypeComponent }]
})


export class QuestionTypeComponent extends QuestionAnswerComponent implements OnInit {

    @Input() question: any;
    protected evaluation: any;

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
         
        this.evaluation = (!!this.value && !!this.value.trim().length)
            ? ANSWER_EVALUATION_TYPE.CORRECT
            : ANSWER_EVALUATION_TYPE.WRONG;
    }


    public getAnswer(): Observable<any> {
         
        return (new Observable<any>((observer: any) => {
            if (!this.form.valid) { observer.error('form is not valid'); }
            else {
                let result = (!!this.value && !!this.value.trim().length);

                observer.next(result);
                observer.complete();
            }
        }));
    }

    ngOnInit() {
         

        this.buildForm();

    }
}
