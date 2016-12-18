import { Observable } from 'rxjs/Rx';
import { Component, OnInit, Input, Output, EventEmitter, QueryList } from '@angular/core';
import { AfterViewInit, ViewChild, ViewChildren } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ExamService } from '../../services/examService';
import { ILiteEvent } from '../../utilities/ILiteEvent'
import { LiteEvent } from '../../utilities/LiteEvent'
import { CountDownTimer } from '../../utilities/CountDownTimer'
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
    get answerComponent(): QuestionAnswerComponent {
        return this.answerComponents.first;
    }

    QUESTION_TYPE: QuestionType;
    exam: any;
    user: any;
    countDownTimer: CountDownTimer;
    itemsCarousel: ItemsCarousel

    constructor(public fb: FormBuilder,
        private route: ActivatedRoute,
        public router: Router,
        public examService: ExamService) {

        debugger;
        this.QUESTION_TYPE = QUESTION_TYPE;
        this.exam = JSON.parse(sessionStorage.getItem('exam') || '{}');
        this.user = JSON.parse(localStorage.getItem('userInfo') || '{}');
        this.countDownTimer = new CountDownTimer(0);
        this.itemsCarousel = new ItemsCarousel();
        this.countDownTimer.onElapsed.on((data) => {
            this.onCountDownTimerElapsed(data);
        })
    }

    start() {
        debugger;
        this.itemsCarousel.items = this.exam.session.questionResponse;
        this.countDownTimer.countDownDuration = 1000 * (+this.exam.session.duration);
        this.countDownTimer.start();
    }

    private onCountDownTimerElapsed(eventData: any) {
        console.log('Time has elapsed ....');
        console.log(eventData);
    }

    onAnswerQuestion() {
        debugger;
        this.countDownTimer.stop();
        this.answerComponent.getAnswer()
            .flatMap(res => {
                debugger;
                var requestData = res;
                return this.examService.sendExamQuestionAnswer(requestData);
            })
            .subscribe(res => {
                debugger;
                if (!this.itemsCarousel.hasNext()) {
                    console.log(res);
                    return;
                }

                this.itemsCarousel.goToNext();
                this.countDownTimer.start();
            },
            error => {
                debugger;
                this.countDownTimer.start();
            });
    }


    ngOnInit() {
        debugger;
        if (!this.exam) {
            this.router.navigateByUrl('/exams');
        }

        var requestData: any = {
            email: this.user.email,
            serviceId: this.exam.id,
            subscriptionId: this.exam.subscription.userSubscriptionId
        }
        this.examService.getSubscribedExamQuestions(requestData).subscribe(res => {
            this.exam.session = res;
            this.start();
        });
    }
}
