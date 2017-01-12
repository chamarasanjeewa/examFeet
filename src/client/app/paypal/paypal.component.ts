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

  constructor(private route: ActivatedRoute,
    private sharedService: SharedService,
    private httpService: HttpService,
    private http: Http, private mcqService: McqService) {

  }

  ngOnInit() {

    // sessionStorage.getItem('examSubscriptionInfo', JSON.stringify({subscriptionCost:this.subscriptionCost,serviceId: this.exam.serviceId}));
    var examSubscriptionInfo = JSON.parse(sessionStorage.getItem('examSubscriptionInfo'));

    this.amount = examSubscriptionInfo.subscriptionCost;
    // this.sharedService.examPriceInfo=null;
    this.returnUrl = " http://localhost:5555/exams/" + examSubscriptionInfo.serviceId + "/beforeStart";
    this.cancelUrl = "http://localhost:5555/exams/" + examSubscriptionInfo.serviceId;

  }

  subscribeToExam() {//TODO this should be verified with the payment in paypal
debugger;
    var examSubscriptionInfo = JSON.parse(sessionStorage.getItem('examSubscriptionInfo'));
    var user = JSON.parse(sessionStorage.getItem('userInfo') || '{}');
    
    var params = {
      "serviceId": examSubscriptionInfo.serviceId,
      "userId": user.id
    }

    this.mcqService.subscribeSelectedExam(params).subscribe(res => {
      console.log(res);
      sessionStorage.setItem('exam', JSON.stringify(res));
      // this.router.navigate(['/']);
    },
      err => {

        console.log(err);
      });
  }

  postInfo() {

    this.subscribeToExam();//TODO

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
