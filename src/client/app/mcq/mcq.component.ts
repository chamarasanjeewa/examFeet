import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import {McqService} from '../services/mcqService';
import { Http } from '@angular/http';
import {LoginService} from '../services/loginService';
import {LoginModel} from '../models/LoginModel';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import {HttpService} from '../services/httpService';

@Component({
    moduleId: module.id,
    selector: 'sd-login',
    templateUrl: 'mcq.component.html',
    styleUrls: ['mcq.component.css'],
    providers: [LoginService,McqService,HttpService]
})
export class McqComponent implements OnInit {
   
    constructor(public fb: FormBuilder, public router: Router, public http: Http, public loginService: LoginService) {
      
    }

      ngOnInit() {
       
    }
    
    
    
}
