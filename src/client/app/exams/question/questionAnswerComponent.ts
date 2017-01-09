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
import { Component, OnInit, AfterViewInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ANSWER_TYPE, AnswerEvaluationType, ANSWER_EVALUATION_TYPE } from './index';

@Component({
    moduleId: module.id,
    selector: 'sd-question'
})

export abstract class QuestionAnswerComponent implements OnChanges, AfterViewInit {

    protected form: FormGroup;
    protected choices: any[];
    protected explanation: any;
    public ANSWER_EVALUATION_TYPE: AnswerEvaluationType;
    public showAnswer: boolean;
    //    public isSampleQuestion: boolean;

    public abstract question: any;
    protected abstract get value(): any;
    protected get isSampleQuestion(): boolean {
        return !!this.question && !!this.question.sampleQuestion;
    }

    constructor() {
        this.ANSWER_EVALUATION_TYPE = ANSWER_EVALUATION_TYPE;
    }

    public abstract getAnswer(): Observable<any>;
    protected abstract createForm(): FormGroup;
    protected buildForm(): void {
        this.form = this.createForm();
        this.form.valueChanges.subscribe((values: any) => {
             
            this.evaluateChoicesAndShowAnswers();
        });
    }
    protected abstract evaluateChoicesAndShowAnswers(): void;

    protected isAnswerExplanation(answer: any): boolean {
        return answer.type === ANSWER_TYPE.EXPLANATION;
    }

    protected reset(): void {
         
        this.choices = this.question.answers.filter((elm: any) => !this.isAnswerExplanation(elm));

        var explanations = this.question.answers.filter((elm: any) => this.isAnswerExplanation(elm));
        this.explanation = (!explanations || !explanations.length) ? null : explanations[0];
        this.showAnswer = false;
        this.buildForm();
    }

    ngAfterViewInit(): void {
         

    }

    ngOnChanges(changes: SimpleChanges) {
         
        this.reset();
    }
}
