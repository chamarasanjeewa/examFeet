import { Observable, Observer } from 'rxjs/Rx';
import { Component, OnInit, Input, Output } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { QuestionAnswerComponent } from './index';

@Component({
    moduleId: module.id,
    selector: 'sd-question-mcq',
    templateUrl: 'question.mcq.component.html',
    styleUrls: ['question.mcq.component.css'],
    providers: [{provide: QuestionAnswerComponent, useExisting: QuestionMcqComponent}]
})

export class QuestionMcqComponent extends QuestionAnswerComponent implements OnInit {

    form: FormGroup;
    @Input() question: any;

       
    constructor(public fb: FormBuilder) {
        super();
        debugger;
    }

    private buildForm() {
        this.form = this.fb.group({});
        this.form.addControl('answer', new FormControl(''));
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
