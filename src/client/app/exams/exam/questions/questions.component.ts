import { Component, OnInit, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'sd-questions',
    templateUrl: 'questions.component.html',
    styleUrls: ['questions.component.css']
})

export class QuestionsComponent implements OnInit {

    @Input() questions: any[];    
    currentQuestionNo: number = 1;

    constructor() {
        console.log('QuestionsComponent .constructor');
    }

    hasNext() {
         debugger;
        return !!this.questions && !!this.questions.length && this.currentQuestionNo < this.questions.length;
    }

    hasPrevious() {
         debugger;
        return !!this.questions && !!this.questions.length && this.currentQuestionNo > 0;
    }

    goToNext() {
        debugger;
        if (!this.hasNext()) { return; }
        this.currentQuestionNo++;
    }

    goToPrevious() {
         debugger;
        if (!this.hasPrevious()) { return; }
        this.currentQuestionNo--;
    }

    ngOnInit() {
        console.log('QuestionsComponent ');

    }





}
