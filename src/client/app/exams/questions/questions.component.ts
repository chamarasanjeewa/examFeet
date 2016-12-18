// import { Component, OnInit, Input, Output, EventEmitter, QueryList } from '@angular/core';
// import { AfterViewInit, ViewChild, ViewChildren } from '@angular/core';
// import { QuestionAnswerComponent, QuestionMcqComponent, QuestionTrueFalseComponent, QuestionTypeComponent } from './index';

// @Component({
//     moduleId: module.id,
//     selector: 'sd-questions',
//     templateUrl: 'questions.component.html',
//     styleUrls: ['questions.component.css']
// })


// export class QuestionsComponent implements OnInit {

//     @ViewChildren(QuestionAnswerComponent) answerComponents: QueryList<QuestionAnswerComponent>;
//     get answerComponent(): QuestionAnswerComponent {
//         return this.answerComponents.first;
//     }

//     @Input() questions: any[];
//     @Input() onQuestionChange: { (data?: any): void };

//     @Output() questionChanged: EventEmitter<any>;

//     private _currentQuestionNo: number = 1;
//     get currentQuestion(): any {
//         return this.questions[this._currentQuestionNo];
//     }

//     constructor() {
//         this.questionChanged = new EventEmitter();
//     }

//     hasNext() {
//         debugger;
//         return !!this.questions && !!this.questions.length && this._currentQuestionNo < this.questions.length;
//     }

//     hasPrevious() {
//         debugger;
//         return !!this.questions && !!this.questions.length && this._currentQuestionNo > 0;
//     }

//     goToNext() {
//         debugger;
//         if (!this.hasNext()) { return; }
//         this._currentQuestionNo++;
//     }

//     goToPrevious() {
//         debugger;
//         if (!this.hasPrevious()) { return; }
//         this._currentQuestionNo--;
//     }

//     private onQuestionChange() {
//         var responseBody = this.answerComponent.getAnswer();
//         this.e
//     }

//     ngOnInit() {
//         console.log('QuestionsComponent ');

//     }

    




// }
