import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared/sharedService';
import { HttpService } from '../services/httpService';
import { Http, Headers } from '@angular/http';
import { McqService } from '../services/mcqService';
import { Router } from '@angular/router';
@Component({
  moduleId: module.id,
  selector: 'paypal-done',
  templateUrl: 'paypal.done.component.html',
  styleUrls: ['paypal.component.css'],
  providers: [SharedService, HttpService, McqService]
})

export class PaypalDoneComponent implements OnInit {

     examSubscriptionInfo:any={};
user:any={};
  constructor(private route: ActivatedRoute,
    private sharedService: SharedService,
    private httpService: HttpService,  private router: Router,
    private http: Http, private mcqService: McqService) {
       this.examSubscriptionInfo = JSON.parse(sessionStorage.getItem('examSubscriptionInfo'));
 this.user = JSON.parse(sessionStorage.getItem('userInfo') || '{}');

  }

  ngOnInit() {
 
    

  }

  goToExam(){

     this.subscribeToExam();

  }

  subscribeToExam() {//TODO this should be verified with the payment in paypal
  
   // var examSubscriptionInfo = JSON.parse(sessionStorage.getItem('examSubscriptionInfo'));
   // var user = JSON.parse(sessionStorage.getItem('userInfo') || '{}');
    
    var paymentInfo= {
          "payment": {
            "noOfMonths":2,
            "priceId":2,
            "currencyCode": "USD",//TODO currencyCode
            "startDate": '12-12-2016 10:22:48',
            "endDate":'12-12-2017 10:22:48', 
            "paymentMethod": "paypal",
            "amount": 200,
            "paymentReference":""
          },
          "serviceId":this.examSubscriptionInfo.serviceId,
          "userId": this.user.userId
     }

  
    this.mcqService.subscribeSelectedExam(paymentInfo).subscribe(res => {
      console.log(res);
      var exam:any={};
        exam.id = this.examSubscriptionInfo.serviceId;
        exam.subscription = {};
        exam.subscription.userSubscriptionId=res;
        sessionStorage.setItem('exam', JSON.stringify(exam));
        this.router.navigateByUrl('/exams/' + exam.id + '/beforeStart');
      
    },
      err => {
        console.log(err);
      });
  }

}
