import { Component, OnInit, NgModule  } from '@angular/core';
import {McqService} from '../services/mcqService';
import { Router,RouterModule } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared/sharedService';
import { HttpService } from '../services/httpService';

@Component({
    moduleId: module.id,
    selector: 'exam-start',
    templateUrl: 'examStart.component.html',
    styleUrls: ['examStart.component.css'],
    providers: [McqService,HttpService]
})
export class ExamStartComponent implements OnInit {
   
    priceSelectForm: FormGroup;
    examList:any;
    constructor(public fb: FormBuilder, public mcqService: McqService, private route: ActivatedRoute,private router:Router,public sharedService:SharedService) {


    }

     startExam(){
          this.router.navigate(['/mcq/examStart']);
     }
    
   
    ngOnInit() {

       
    }
}
