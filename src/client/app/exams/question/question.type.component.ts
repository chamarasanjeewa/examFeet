import { Observable, Observer } from 'rxjs/Rx';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { QuestionAnswerComponent } from './index';

@Component({
    moduleId: module.id,
    selector: 'sd-question-type',
    templateUrl: 'question.type.component.html',
    styleUrls: ['question.type.component.css'],
    providers: [{ provide: QuestionAnswerComponent, useExisting: QuestionTypeComponent }]
})


export class QuestionTypeComponent extends QuestionAnswerComponent implements OnInit {

    @Input() question: any;

    constructor(public fb: FormBuilder) {
        super();
    }


    protected buildForm() {
        this.form = this.fb.group({});
        this.form.addControl('answer', new FormControl(''));
    }

    public getAnswer(): Observable<any> {
        return (new Observable<any>((observer: any) => {
            if (!this.form.valid) { observer.error('form is not valid'); }
            else {
                debugger;
                let userAnswer: any = this.form.value;
                let result = (!!userAnswer && !!userAnswer.answer && !!userAnswer.answer.trim().length);
                debugger;
                observer.next(result);
                observer.complete();
            }
        }));
    }

    ngOnInit() {
        this.buildForm();
    }
}
