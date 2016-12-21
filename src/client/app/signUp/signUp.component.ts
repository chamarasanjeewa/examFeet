import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { SignUpService } from '../services/signUpService';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from '../services/validationService';
import { SharedService } from '../shared/sharedService';
import { Country } from '../models/country';
//import * as _ from 'underscore';
/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-signUp',
  templateUrl: 'signUp.component.html',
  styleUrls: ['signUp.component.css'],
  providers: [SignUpService]
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  signUpError:string;
   countries = [
     new Country(1, 'USA' ),
     new Country(2, 'India' ),
     new Country(3, 'Australia' ),
     new Country(4, 'Brazil'),
     new Country(5, 'Russia')
  ];

  constructor(public fb: FormBuilder, public router: Router, public http: Http, public signUpService: SignUpService) {

  }

  ngOnInit() {
    this.signUpForm = this.fb.group({
      email: ['', Validators.compose([
        Validators.required,ValidationService.emailValidator])]//ValidationService.emailValidator
      ,
      passwords: this.fb.group(this.initPasswordValidationModel(), {validator: ValidationService.areEqual})
      ,
      telephone: this.fb.group(this.initTelephoneValidationModel())
    })


  }
  
  onInput(){
      
  }

  initPasswordValidationModel() {
    const model = {
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }
    return model;

  }

  initTelephoneValidationModel() {
    const model = {
      countryCode: ['', Validators.required],
      telephoneNumber: ['', Validators.required]
    }
    return model;

  }




 
    signup() {
          let formData = this.signUpForm.value;
        this.signUpService.registerUser(formData)
       .subscribe(res => {
  debugger;
  
                if(res.statusCode==-1){
                   this.signUpError=res.statusMessage;
                }else{

                //     res.userId = +res.userId; 
                // localStorage.setItem('userInfo', JSON.stringify(res))
                // console.log(res);
                this.router.navigate(['/login']);
                }

                                   console.log(res)  ;
                                  }, 
                                  err => {

                                      console.log(err);
                                  });
    }
}
