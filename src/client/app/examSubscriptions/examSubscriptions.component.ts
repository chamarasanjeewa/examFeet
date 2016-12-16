import { Component, OnInit, NgModule  } from '@angular/core';
import {McqService} from '../services/mcqService';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { SharedService } from '../shared/sharedService';
import { HttpService } from '../services/httpService';

@Component({
    moduleId: module.id,
    selector: 'exam-subscriptions',
    templateUrl: 'examSubscriptions.component.html',
    styleUrls: ['examSubscriptions.component.css'],
    providers: [McqService,HttpService]
})
export class ExamSubscriptionsComponent implements OnInit {
   
    priceSelectForm: FormGroup;
    examList:any;
    constructor(public fb: FormBuilder, public mcqService: McqService, private route: ActivatedRoute,private router:Router,public sharedService:SharedService) {

      this.getSubscriptionsList();
    }
    
 getSubscriptionsList(){
     var userInfo= localStorage.getItem('userInfo')
    if(userInfo!=undefined && userInfo!=null){
        var obj=JSON.parse(userInfo) 
        let userId=+obj.userId;
     this.mcqService.getSubscribedSessions(userId).subscribe(res => {
               this.examList=res;
                console.log(res);
           
            },
            err => {

                console.log(err);
            });
     }
 }
     
    
   
    ngOnInit() {

       
    }
}
