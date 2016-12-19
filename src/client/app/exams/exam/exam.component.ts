import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
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
    subscriptionCost : Number;
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

    constructor(public fb: FormBuilder,
        private route: ActivatedRoute,
        public router: Router,
        public examService: ExamService,public sharedService:SharedService) {

        console.log('controller - exam ..')

        this.exam = JSON.parse(sessionStorage.getItem('exam') || '{}');
    }

    calculateSubscriptionCost(month: any) {
            this.subscriptionCost = this.exam.price.price * month.id;//$stateParams.selectedExam.price* $scope.numberOfMonths;
    }

    purchaseSubsciption() {
        this.sharedService.examPriceInfo=this.subscriptionCost;
        this.router.navigate(['/paypal']);
    }
    
    ngOnInit() {
        console.log('exam');
        this.route.params
            .switchMap((params: Params) => {
                if (!this.exam || !this.exam.serviceId || !this.exam.serviceId || this.exam.serviceId != +params['id']) {
                    this.router.navigateByUrl('/exams');
                    return Observable.throw('exam mismatch ...');
                }

                return this.examService.getExamInfo({ serviceId: this.exam.serviceId });
            })
            .subscribe(res => {
                console.log(res);
                Object.assign(this.exam, res);
            }, error => {
                console.log(error);
            });
    }
}
