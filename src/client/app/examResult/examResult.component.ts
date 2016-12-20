import { Component, OnInit, NgModule  } from '@angular/core';
import {McqService} from '../services/mcqService';
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
    correctAnswerPercentage:any;
totalCorrect:any;
totalIncorrect:any;
averageTimePerQuestion:any;
totalTimeDuration:any;
    
    constructor(public fb: FormBuilder, public mcqService: McqService, private route: ActivatedRoute, private router: Router, private sharedService: SharedService) {
        //debugger;
        var results = JSON.parse(sessionStorage.getItem('results'));
        if (results != undefined && results.summary != undefined && results.summary.summary!=undefined && results.summary.summary.length > 0) {
            var summary = results.summary.summary[0];
           this.totalCorrect = summary.correct;
            var totalQuestions = summary.total;
            this.correctAnswerPercentage = Math.round((this.totalCorrect / totalQuestions) * 100);

            this.totalIncorrect = totalQuestions - this.totalCorrect;
            this.totalTimeDuration = results.summary.totalTimeTaken;
            this.averageTimePerQuestion =this.totalTimeDuration / totalQuestions;
        }


    }

    ngOnInit() {


    }
}
