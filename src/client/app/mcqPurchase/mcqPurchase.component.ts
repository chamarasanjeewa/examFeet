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
    selector: 'mcq-purchase',
    templateUrl: 'mcqPurchase.component.html',
    styleUrls: ['mcqPurchase.component.css'],
    providers: [McqService,HttpService]
})
export class McqPurchaseComponent implements OnInit {
    id: any;
    sub: any;
    selectedExam: any;
    monthsList = [
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
    selectedExamMonth: any;
    examSubscriptionPrice: any;
    examPerMonthPrice: any;
    priceSelectForm: FormGroup;
    constructor(public fb: FormBuilder, public mcqService: McqService, private route: ActivatedRoute,private router:Router,private sharedService:SharedService) {


    }

    calculateExamPrice(selectedExamMonth: any) {
        debugger;
        this.selectedExamMonth = selectedExamMonth;
        if (this.selectedExam != undefined) {
            this.examSubscriptionPrice = this.selectedExam.price.price * selectedExamMonth.id;//$stateParams.selectedExam.price* $scope.numberOfMonths;
        }
    }

    private payForExam() {
        this.sharedService.examPriceInfo=this.examSubscriptionPrice;
        this.router.navigate(['/mcq/paypal',this.examSubscriptionPrice]);
 
    }

    // $scope.payForExam=function(){

    // if(appSettings.isProduction){

    //   PaypalService.initPaymentUI().then(function () {

    //     var payingAmount=parsePayingAmount();

    //   if(payingAmount>0){

    //      PaypalService.makePayment(payingAmount,$scope.selectedExam.price.currencyCode, "Total Amount").then(function (response) {
    //      $ionicLoading.show({template: "Payment accepted via paypal",duration:2000}).then(function(){
    //          $scope.subscribeToExam();
    //         });

    //     }, function (error) {

    //       $ionicLoading.show({template: error,duration:2000}).then(function(){

    //         });
    //        });
    //    }

    ngOnInit() {

        this.sub = this.route.params.subscribe(params => {

            this.id = +params['id'];
            this.mcqService.getQuestionsByServiceId(this.id).subscribe(selectedMcq => {

                this.selectedExam = selectedMcq;
            }, error => {

            }, () => { })
        });

        this.priceSelectForm = this.fb.group({
            selectedPrice: [''],


        })

    }
}
