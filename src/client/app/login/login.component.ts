import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import {LoginService} from '../services/loginService';
import {HttpService} from '../services/httpService';
import {ValidationService} from '../services/validationService';

import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { SharedService } from '../shared/sharedService';
@Component({
    moduleId: module.id,
    selector: 'sd-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css'],
    providers: [LoginService,HttpService]
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    
    constructor(public fb: FormBuilder, public router: Router, public http: Http, public loginService: LoginService,public sharedService:SharedService) {
      
    }

    ngOnInit() {
        
    localStorage.setItem('userInfo',null);
    
    this.loginForm  = this.fb.group({
    userName:['', Validators.compose([
                                        Validators.required,ValidationService.emailValidator//,
                                       // Validators.minLength(5)
                                        ]) ],
    password: ['',Validators.compose([
                                        Validators.required,
                                        //Validators.minLength(5)
                                        ])]
    })

 
    }
    
   
    login() {
    
      let formData = this.loginForm.value;
        this.loginService.authenticateUser(formData)
            .subscribe(res => {
                
                localStorage.setItem('userInfo',JSON.stringify(res))

                console.log(res);
                this.router.navigate(['/']);
            },
            err => {

                console.log(err);
            });
      
    }


}
