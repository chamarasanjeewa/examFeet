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

  title = 'PayPal Test';
  amount:any;

  constructor(private route: ActivatedRoute,
  private sharedService: SharedService,
  private httpService: HttpService,
  private http: Http){
      
  }
  
   ngOnInit() {
  debugger;
    this.amount= this.sharedService.examPriceInfo;
         this.sharedService.examPriceInfo=null;
          
           
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
