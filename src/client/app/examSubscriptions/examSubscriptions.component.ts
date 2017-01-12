import { Component, OnInit, NgModule } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { McqService } from '../services/mcqService';
import { SharedService } from '../shared/sharedService';
import { HttpService } from '../services/httpService';

@Component({
    moduleId: module.id,
    selector: 'exam-subscriptions',
    templateUrl: 'examSubscriptions.component.html',
    styleUrls: ['examSubscriptions.component.css'],
    providers: [McqService, HttpService]
})

export class ExamSubscriptionsComponent implements OnInit {

    userInfo: any;
    subscriptions: any;
    priceSelectForm: FormGroup;

    constructor(public fb: FormBuilder,
        public mcqService: McqService,
        private route: ActivatedRoute,
        private router: Router,
        public sharedService: SharedService) {

        this.userInfo = JSON.parse(sessionStorage.getItem('userInfo') || '{}');
    }

    getSubscriptionsList() {
       
        if (!this.userInfo) { return; }

        this.mcqService.getSubscribedSessions(this.userInfo.userId).subscribe(res => {
            this.subscriptions = res;
            console.log(res);
        }, err => {
            console.log(err);
        });
    }

    selectSubscription(subscription: any) {
        debugger;
        var exam = JSON.parse(sessionStorage.getItem('exam') || '{}');
        exam.id = subscription.serviceId;
        exam.subscription = subscription;
        sessionStorage.setItem('exam', JSON.stringify(exam));

        this.router.navigateByUrl('/exams/' + exam.id + '/start');
    }

    ngOnInit() {
     this.getSubscriptionsList();
    }
}
