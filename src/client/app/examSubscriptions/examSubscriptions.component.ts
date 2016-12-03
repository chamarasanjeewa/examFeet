import { Component, OnInit, NgModule  } from '@angular/core';
import {McqService} from '../services/mcqService';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { SharedService } from '../shared/sharedService';
/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
    moduleId: module.id,
    selector: 'exam-subscriptions',
    templateUrl: 'examSubscriptions.component.html',
    styleUrls: ['examSubscriptions.component.css'],
    providers: [McqService]
})
export class ExamSubscriptionsComponent implements OnInit {
   
    priceSelectForm: FormGroup;
    constructor(public fb: FormBuilder, public mcqService: McqService, private route: ActivatedRoute,private router:Router,private sharedService:SharedService) {


    }
    
 getSubscriptionsList(){
     let userId=this.sharedService.sessionInfo.userId;
     this.mcqService.getSubscribedSessions(userId).subscribe(res => {
                debugger;
                console.log(res);
                this.router.navigate(['/']);
            },
            err => {

                console.log(err);
            });
 }
     
    
   
    ngOnInit() {

       
    }
}
