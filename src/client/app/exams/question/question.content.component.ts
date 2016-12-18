import { Component, OnInit, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'sd-question-content',
    templateUrl: 'question.content.component.html',
    styleUrls: ['question.content.component.css']
})

export class QuestionContentComponent implements OnInit {

    @Input() question: any;

    constructor() { }


    ngOnInit() {}
}
