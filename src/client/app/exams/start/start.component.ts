import { Observable } from 'rxjs/Rx';
import { Component, OnInit, Input, Output, EventEmitter, QueryList } from '@angular/core';
import { AfterViewInit, ViewChild, ViewChildren } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ExamService } from '../../services/examService';
import { ILiteEvent } from '../../utilities/ILiteEvent'
import { LiteEvent } from '../../utilities/LiteEvent'
import { CountDownTimer } from '../../utilities/countDownTimer'
import { ItemsCarousel } from '../../utilities/ItemsCarousel'
import { QuestionAnswerComponent, QuestionMcqComponent, QuestionTrueFalseComponent, QuestionTypeComponent, QuestionType, QUESTION_TYPE } from './index';


@Component({
    moduleId: module.id,
    selector: 'sd-exam-start',
    templateUrl: 'start.component.html',
    styleUrls: ['start.component.css'],
    providers: [ExamService]
})

export class StartComponent implements OnInit {

    @ViewChildren(QuestionAnswerComponent) answerComponents: QueryList<QuestionAnswerComponent>;

    private _exam: any;
    private _user: any;
    private _countDownTillPreviousQuestion: number;
    countDownTimer: CountDownTimer;
    itemsCarousel: ItemsCarousel;
    QUESTION_TYPE: QuestionType;


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
        return this.countDownTimer.renamingDuration;
    }
    get durationOnCurrentQuestion(): number {
        return this._countDownTillPreviousQuestion - this.duration;
    }


    constructor(public fb: FormBuilder,
        private route: ActivatedRoute,
        public router: Router,
        public examService: ExamService) {


        this.QUESTION_TYPE = QUESTION_TYPE;
        this._countDownTillPreviousQuestion = 0;
        this._exam = JSON.parse(sessionStorage.getItem('exam') || '{}');
        this._user = JSON.parse(localStorage.getItem('userInfo') || '{}');
        this.countDownTimer = new CountDownTimer(this._countDownTillPreviousQuestion);
        this.itemsCarousel = new ItemsCarousel();
        this.countDownTimer.onElapsed.on((data) => {
            this.onCountDownTimerElapsed(data);
        });
    }

    start() {

        this.itemsCarousel.items = this._exam.session.questionResponse;
        this.countDownTimer.triggerDuration = 1000 * (+this._exam.session.duration);
        this._countDownTillPreviousQuestion = this.countDownTimer.triggerDuration;
        this.countDownTimer.start();
    }

    private onCountDownTimerElapsed(eventData: any) {
        console.log('Time has elapsed ....');
        console.log(eventData);
    }

    onAnswerQuestion() {

        this.countDownTimer.stop();
        this.answerComponent.getAnswer()
            .flatMap(res => {

                var requestData = {
                    uniqueSessionIdentifier: this._exam.session.uniqueSessionIdentifier,
                    email: this._user.email,
                    serviceId: this._exam.id,
                    questionId: this.currentQuestion.questionId,
                    answer: res,
                    currentAnsweringQuestion: this.currentQuestionNo,
                    totalNumberOfQuestions: this.itemsCarousel.items.length,
                    answerUpdateDto: {
                        quectionType: this.currentQuestion.questionType,
                        answer: res,
                        answerIds: []
                    },
                    spendTimeOnQuection: this.durationOnCurrentQuestion
                };

                return this.examService.sendExamQuestionAnswer(requestData);
            })
            .subscribe(res => {

                if (!this.itemsCarousel.hasNext()) {
                    console.log(res);
                   var examData={email: this._user.email,serviceId: this._exam.id,results:res};
                     sessionStorage.setItem('results', JSON.stringify(examData));
                   
                    // this.exam = JSON.parse(sessionStorage.getItem('exam') || '{}');
                     this.router.navigateByUrl('/results');
                    return;
                }

                this._countDownTillPreviousQuestion = this.duration;
                this.itemsCarousel.goToNext();
                this.countDownTimer.start();
            },
            error => {

                this.countDownTimer.start();
            });
    }


    ngOnInit() {

        if (!this._exam) {
            this.router.navigateByUrl('/exams');
        }
         
        var requestData: any = {
            email: this._user.email,
            serviceId: this._exam.id,
            subscriptionId: this._exam.subscription.userSubscriptionId
        }
        this.examService.getSubscribedExamQuestions(requestData).subscribe(res => {
            this._exam.session = res;
            this.start();
        });
    }
}
