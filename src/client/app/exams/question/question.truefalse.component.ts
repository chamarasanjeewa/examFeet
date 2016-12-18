import { Observable, Observer } from 'rxjs/Rx';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { QuestionAnswerComponent } from './index';

@Component({
    moduleId: module.id,
    selector: 'sd-question-truefalse',
    templateUrl: 'question.truefalse.component.html',
    styleUrls: ['question.truefalse.component.css'],
    providers: [{provide: QuestionAnswerComponent, useExisting: QuestionTrueFalseComponent}]
})

export class QuestionTrueFalseComponent extends QuestionAnswerComponent implements OnInit {

    @Input() question: any;
    form: FormGroup;

     constructor(public fb: FormBuilder) {
        super();
        debugger;
    }


    private buildForm() {
        debugger;
        this.form = this.fb.group({});

        for (let idx in this.question.answers) {
            this.form.addControl('answer[' + idx + ']', new FormControl(false));
        }
    }


    public getAnswer(): Observable<any> {
        debugger;
       return (new Observable<any>((observer: any) => {
            if (!this.form.valid) { observer.error('form is not valid'); }
            else {
                observer.next(this.form.value);
                observer.complete();
            }
        }));
    }

    ngOnInit() {
        debugger;
        this.buildForm();
    }



}
