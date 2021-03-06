import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ExamService } from '../../services/examService';
import { SharedService } from '../../shared/sharedService';

@Component({
    moduleId: module.id,
    selector: 'sd-exam',
    templateUrl: 'exam.component.html',
    styleUrls: ['exam.component.css'],
    providers: [ExamService]
})

export class ExamComponent implements OnInit {
    exam: any;
    subscriptionCost: Number;
    examInfo: any;
    months = [
        { id: 1, value: "1 Month" },
        { id: 2, value: "2 Months" },
        { id: 3, value: "3 Months" },
        { id: 4, value: "4 Months" },
        { id: 5, value: "5 Months" },
        { id: 6, value: "6 Months" },
        { id: 7, value: "7 Months" },
        { id: 8, value: "8 Months" },
        { id: 9, value: "9 Months" },
        { id: 10, value: "10 Months" },
        { id: 11, value: "11 Months" },
        { id: 12, value: "12 Months" }
    ];
    selectedMonth: any;
    public get canTry(): boolean {
        return !!this.exam && !!this.exam.sampleQuestions && !!this.exam.sampleQuestions.numOFSampleQuection; 
    }

    constructor(public fb: FormBuilder,
        private route: ActivatedRoute,
        public router: Router,
        public examService: ExamService, 
		public sharedService: SharedService) {

        console.log('controller - exam ..')
        this.exam = JSON.parse(sessionStorage.getItem('exam') || '{}');
    }

    calculateSubscriptionCost(month: any) {

        var month = this.selectedMonth;
        this.subscriptionCost = this.exam.price * month.id;//$stateParams.selectedExam.price* $scope.numberOfMonths;
    }

    try() {

        this.router.navigate(['try'], { relativeTo: this.route });
    }

    purchaseSubsciption() {
        // this.sharedService.examPriceInfo=this.subscriptionCost;
        sessionStorage.setItem('examSubscriptionInfo', JSON.stringify({ subscriptionCost: this.subscriptionCost, serviceId: this.exam.serviceId }));

        this.router.navigate(['/paypal']);
    }

    ngOnInit() {
        this.selectedMonth = this.months[0];
        this.calculateSubscriptionCost(this.selectedMonth);
    }
}
