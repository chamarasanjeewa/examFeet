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
    selector: 'mcq-result',
    templateUrl: 'mcqResult.component.html',
    styleUrls: ['mcqResult.component.css'],
    providers: [McqService,HttpService]
})
export class McqResultComponent implements OnInit {
   
    priceSelectForm: FormGroup;
    constructor(public fb: FormBuilder, public mcqService: McqService, private route: ActivatedRoute,private router:Router,private sharedService:SharedService) {


    }

    
   
    ngOnInit() {

       
    }
}
