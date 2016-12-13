import { Component, OnInit, NgModule  } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { SharedService } from '../shared/sharedService';
import { HttpService } from '../services/httpService';


@Component({
    moduleId: module.id,
    selector: 'mcq-result',
    templateUrl: 'dashBoard.component.html',
    styleUrls: ['dashBoard.component.css'],
    providers: [HttpService]
})
export class DashBoardComponent implements OnInit {
   
    priceSelectForm: FormGroup;
    constructor(public fb: FormBuilder, private route: ActivatedRoute,private router:Router,private sharedService:SharedService) {


    }

    
   
    ngOnInit() {

       
    }
}
