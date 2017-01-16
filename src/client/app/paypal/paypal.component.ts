import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared/sharedService';
import { HttpService } from '../services/httpService';
import { Http, Headers } from '@angular/http';
import { McqService } from '../services/mcqService';
@Component({
  moduleId: module.id,
  selector: 'paypal-comp',
  templateUrl: 'paypal.component.html',
  styleUrls: ['paypal.component.css'],
  providers: [SharedService, HttpService, McqService]
})

export class PaypalComponent implements OnInit {

  title = 'Paypal';
  amount: any;
  returnUrl: any;
  cancelUrl: any;
  form:any;
  //@ViewChild('form') any; 

  constructor(private route: ActivatedRoute,
    private sharedService: SharedService,
    private httpService: HttpService,
    private http: Http, private mcqService: McqService) {

  }

  submit(form:any){

    this.postInfo();
  }

  ngOnInit() {

    // sessionStorage.getItem('examSubscriptionInfo', JSON.stringify({subscriptionCost:this.subscriptionCost,serviceId: this.exam.serviceId}));
    var examSubscriptionInfo = JSON.parse(sessionStorage.getItem('examSubscriptionInfo'));

    this.amount = examSubscriptionInfo.subscriptionCost;
    // this.sharedService.examPriceInfo=null;
    this.returnUrl = " http://localhost:5555/paypal/done";
    this.cancelUrl = "http://localhost:5555/exams/" + examSubscriptionInfo.serviceId;

  }

  subscribeToExam() {//TODO this should be verified with the payment in paypal

    var examSubscriptionInfo = JSON.parse(sessionStorage.getItem('examSubscriptionInfo'));
    var user = JSON.parse(sessionStorage.getItem('userInfo') || '{}');
    
    var paymentInfo= {
          "payment": {
            "noOfMonths":2,
            "priceId":2,
            "currencyCode": "USD",//TODO currencyCode
            "startDate": '2007/4/4',
            "endDate":'2007/4/4', 
            "paymentMethod": "paypal",
            "amount": examSubscriptionInfo.subscriptionCost,
            "paymentReference":""
          },
          "serviceId":examSubscriptionInfo.serviceId,
          "userId": user.userId
     }

  
    this.mcqService.subscribeSelectedExam(paymentInfo).subscribe(res => {
      console.log(res);
    
      sessionStorage.setItem('examSubscriptionInfomation', JSON.stringify(res));
      // this.router.navigate(['/']);
    },
      err => {
        console.log(err);
      });
  }

  postInfo() {

   // this.subscribeToExam();//TODO

    let headers = this.httpService.getHttpHeaders();
    headers.append('Content-Type', 'text/html; charset=utf-8');

    return this.http.post("https://www.sandbox.paypal.com/cgi-bin/webscr", {}, {

      headers: headers

    })
      //.timeout(REQUEST_TIME_OUT_TIME, { "status": 408 })
      // .map(response => response.json())
      .subscribe(res => {

        console.log(res);
        // this.router.navigate(['/']);
      },
      err => {

        console.log(err);
      });


  }
}
