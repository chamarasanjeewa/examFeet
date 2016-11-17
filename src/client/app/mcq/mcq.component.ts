import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import {LoginService} from '../services/loginService';
import {LoginModel} from '../models/LoginModel';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RouterModule }   from '@angular/router';
@Component({
    moduleId: module.id,
    selector: 'sd-login',
    templateUrl: 'mcq.component.html',
    styleUrls: ['mcq.component.css'],
    providers: [LoginService]
})
export class McqComponent implements OnInit {
   
    constructor(public fb: FormBuilder, public router: Router, public http: Http, public loginService: LoginService) {
      
    }

      ngOnInit() {
       
    }
    
    
    
}
