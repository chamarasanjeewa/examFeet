import { Component, OnInit, NgModule } from '@angular/core';
import { McqService } from '../services/mcqService';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { SharedService } from '../shared/sharedService';
import { HttpService } from '../services/httpService';
/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
    moduleId: module.id,
    selector: 'mcq-result',
    templateUrl: 'examResult.component.html',
    styleUrls: ['examResult.component.css'],
    providers: [McqService, HttpService]
})
export class ExamResultComponent implements OnInit {

    priceSelectForm: FormGroup;
    correctAnswerPercentage: any;
    totalCorrect: any;
    totalIncorrect: any;
    averageTimePerQuestion: any;
    totalTimeDuration: any;
    examInfo:any;

    constructor(public fb: FormBuilder, public mcqService: McqService, private route: ActivatedRoute, private router: Router, private sharedService: SharedService) {
        //debugger;
        this.examInfo = JSON.parse(sessionStorage.getItem('results'));
        if (this.examInfo.results != undefined && this.examInfo.results.summary != undefined && this.examInfo.results.summary.summary != undefined && this.examInfo.results.summary.summary.length > 0) {
            var summary = this.examInfo.results.summary.summary[0];
            this.totalCorrect = summary.correct;
            var totalQuestions = summary.total;
            debugger;
            this.correctAnswerPercentage =( (this.totalCorrect / totalQuestions) * 100).toFixed(1);

            this.totalIncorrect = totalQuestions - this.totalCorrect;
            this.totalTimeDuration =  ((this.examInfo.results.summary.totalTimeTaken/1000)).toFixed(1);
            this.averageTimePerQuestion = ((this.totalTimeDuration / totalQuestions)).toFixed(1);
        }


    }

    ngOnInit() {


    }

    showHistory() {
         this.router.navigateByUrl('/subscriptions');
    }

    showQuestion() {
        this.router.navigateByUrl('/exams/' + this.examInfo.serviceId + '/start');
    }
}
