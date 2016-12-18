// import { Observable } from 'rxjs/Rx';
// import { Component, OnInit, Input, OnChanges } from '@angular/core';
// import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


// export abstract class QuestionAnswerComponent implements OnChanges {

//     form: FormGroup;
//     abstract getAnswer(): Observable<any>;
//     abstract buildForm(): void;
//     public reset(): void {
//         this.form.reset();
//         this.buildForm();
//     }
// }


import { Observable, Observer } from 'rxjs/Rx';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'sd-question'
})

export abstract class QuestionAnswerComponent implements OnChanges {

    protected form: FormGroup;

    constructor() {

    }

    protected abstract buildForm(): void;
    public abstract getAnswer(): Observable<any>;
    protected reset(): void {
        if (this.form) { this.form.reset(); }
        this.buildForm();
    }

    ngOnChanges(changes: SimpleChanges) {

        this.reset();
    }
}
