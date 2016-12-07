import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { SignUpService } from '../services/signUpService';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {ValidationService} from '../services/validationService';
import { SharedService } from '../shared/sharedService';
import {Country } from '../models/country';
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
    debugger;
    // _.each([1, 2, 3], alert);
    let formData = this.signUpForm.value;
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('confirmPassword').value
      ? null : { 'mismatch': true };
  }
  //   signup(signUpModel:SignUpModel) {
  //       this.signUpService.registerUser(signUpModel)
  //      .subscribe(res => {
  //                                    debugger;
  //                                  console.log(res)  ;
  //                                 }, 
  //                                 err => {

  //                                     console.log(err);
  //                                 });
  //   }
}
