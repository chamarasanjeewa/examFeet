import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared/sharedService';
import { HttpService } from '../services/httpService';
import { Http, Headers } from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'paypal-comp',
  templateUrl: 'paypal.component.html',
  styleUrls: ['paypal.component.css'],
  providers: [SharedService, HttpService]
})

export class PaypalComponent implements OnInit {

  title = 'Paypal';
  amount:any;
  returnUrl:any;
  cancelUrl:any;

  constructor(private route: ActivatedRoute,
  private sharedService: SharedService,
  private httpService: HttpService,
  private http: Http){
      
  }
  
   ngOnInit() {
     
 // sessionStorage.getItem('examSubscriptionInfo', JSON.stringify({subscriptionCost:this.subscriptionCost,serviceId: this.exam.serviceId}));
          var examSubscriptionInfo = JSON.parse(sessionStorage.getItem('examSubscriptionInfo'));
      
         this.amount= examSubscriptionInfo.subscriptionCost;
        // this.sharedService.examPriceInfo=null;
          this.returnUrl=" http://localhost:5555/exams/"+examSubscriptionInfo.serviceId+"/beforeStart";
          this.cancelUrl="http://localhost:5555/exams/"+examSubscriptionInfo.serviceId;
       
    }
    
    postInfo(){
       
            let headers=this.httpService.getHttpHeaders();
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
