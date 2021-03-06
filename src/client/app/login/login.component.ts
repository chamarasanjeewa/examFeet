import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Http } from '@angular/http';
import { LoginService } from '../services/loginService';
import { HttpService } from '../services/httpService';
import { ValidationService } from '../services/validationService';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { SharedService } from '../shared/sharedService';

@Component({
    moduleId: module.id,
    selector: 'sd-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css'],
    providers: [LoginService, HttpService]
})

export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loginError:string;
    constructor(public fb: FormBuilder,
        public router: Router,
        public http: Http,
        public loginService: LoginService,
        public sharedService: SharedService) {

    }

    ngOnInit() {

        sessionStorage.setItem('userInfo', null);

        this.loginForm = this.fb.group({
            userName: ['', Validators.compose([
                Validators.required, ValidationService.emailValidator//,
                // Validators.minLength(5)
            ])],
            password: ['', Validators.compose([
                Validators.required,
                //Validators.minLength(5)
            ])]
        })


    }


    login() {

        let formData = this.loginForm.value;
        this.loginService.authenticateUser(formData)
            .subscribe(res => {
                if(res.statusCode==-1){
                   this.loginError=res.statusMessage;
                }else{

                    res.userId = +res.userId; 
                 
                sessionStorage.setItem('userInfo', JSON.stringify(res))
                console.log(res);
                this.router.navigate(['/dashBoard']);
                }

               
            },
            err => {

                console.log(err);
            });

    }


}
