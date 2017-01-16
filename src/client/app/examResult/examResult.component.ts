import { Component, OnInit, NgModule } from '@angular/core';
import { McqService } from '../services/mcqService';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { SharedService } from '../shared/sharedService';
import { HttpService } from '../services/httpService';
import { Result } from '../core/models/index'


@Component({
    moduleId: module.id,
    selector: 'mcq-result',
    templateUrl: 'examResult.component.html',
    styleUrls: ['examResult.component.css'],
    providers: [McqService, HttpService]
})
export class ExamResultComponent implements OnInit {

    examInfo: any;
    totalCorrect: any;
    totalIncorrect: any;
    correctAnswerPercentage: any;
    averageTimePerQuestion: any;
    totalTimeDuration: any;


    constructor(public fb: FormBuilder,
        public mcqService: McqService,
        private route: ActivatedRoute,
        private router: Router,
        private sharedService: SharedService) {


        this.examInfo = JSON.parse(sessionStorage.getItem('results'));
        if (!!this.examInfo.results && !!this.examInfo.results) {

            var _results: Result = Object.assign(new Result(), this.examInfo.results);
            this.totalCorrect = _results.correct;
            this.totalIncorrect = _results.incorrect;
            this.correctAnswerPercentage = _results.percentage.toFixed(1);
            this.averageTimePerQuestion = (_results.averageDuration / 1000).toFixed(1);
            this.totalTimeDuration = (_results.duration / 1000).toFixed(1);
        }
    }

    ngOnInit() { }

    showHistory() {
        this.router.navigateByUrl('/subscriptions');
    }

    showQuestion() {
        var _url = '/exams/' + this.examInfo.serviceId + ((!this.examInfo.isTry) ? '/start' : '/try');
        this.router.navigateByUrl(_url);
    }
}
