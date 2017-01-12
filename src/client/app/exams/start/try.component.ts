import { Observable } from 'rxjs/Rx';
import { Component, OnInit, Input, Output, EventEmitter, QueryList } from '@angular/core';
import { AfterViewInit, ViewChild, ViewChildren } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ExamService } from '../../services/examService';
import { ILiteEvent } from '../../utilities/ILiteEvent'
import { LiteEvent } from '../../utilities/LiteEvent'
import { Timer } from '../../utilities/timer'
import { ItemsCarousel } from '../../utilities/ItemsCarousel'
import { QuestionAnswerComponent, QuestionMcqComponent, QuestionTrueFalseComponent, QuestionTypeComponent, QuestionType, QUESTION_TYPE } from './index';


@Component({
    moduleId: module.id,
    selector: 'sd-exam-try',
    templateUrl: 'start.component.html',
    styleUrls: ['start.component.css'],
    providers: [ExamService]
})

export class TryComponent implements OnInit {

    @ViewChildren(QuestionAnswerComponent) answerComponents: QueryList<QuestionAnswerComponent>;

    protected exam: any;
    protected user: any;
    protected durationTillPreviousQuestion: number;
    protected timer: Timer;
    protected itemsCarousel: ItemsCarousel;
    protected QUESTION_TYPE: QuestionType;
    protected results: any;


    get answerComponent(): QuestionAnswerComponent {
        return this.answerComponents.first;
    }
    get currentQuestion(): any {
        return this.itemsCarousel.currentItem;
    }
    get currentQuestionNo(): number {
        return this.itemsCarousel.currentItemNo;
    }
    get duration(): number {
        return this.timer.elapsedDuration;
    }
    get durationOnCurrentQuestion(): number {
        return this.duration - this.durationTillPreviousQuestion;
    }


    constructor(public fb: FormBuilder,
        private route: ActivatedRoute,
        public router: Router,
        public examService: ExamService) {

        this.QUESTION_TYPE = QUESTION_TYPE;
        this.durationTillPreviousQuestion = 0;
        this.results = {};
        this.exam = JSON.parse(sessionStorage.getItem('exam') || '{}');
        this.user = JSON.parse(sessionStorage.getItem('userInfo') || '{}');
        this.timer = new Timer();
        this.itemsCarousel = new ItemsCarousel();
    }

    public start(): void {
        this.itemsCarousel.items = this.exam.trailQuestion;
        this.durationTillPreviousQuestion = 0;
        this.timer.start();
    }

    onAnswerQuestion() {
        this.timer.stop();
        this.answerComponent.getAnswer()
            .subscribe(res => {
                 
                this.results[this.currentQuestionNo] = res;

                if (!this.itemsCarousel.hasNext()) {
                    sessionStorage.setItem('results', JSON.stringify(this.results));
                    this.router.navigateByUrl('/results');
                    return;
                }

                this.durationTillPreviousQuestion = this.duration;
                this.itemsCarousel.goToNext();
                this.timer.start();
            },
            error => {
                this.timer.start();
            });
    }


    ngOnInit() {

        if (!this.exam) {
            this.router.navigateByUrl('/exams');
        }
         
        var requestData: any = {
            serviceId: this.exam.serviceId
        }
        this.examService.getSampleExamQuestions(requestData).subscribe(res => {
            this.exam.trailQuestion = res;
            this.start();
        });
    }
}
