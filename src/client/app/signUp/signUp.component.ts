import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { SignUpModel } from '../models/SignUpModel';
import { SignUpService } from '../services/signUpService';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
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
  signUpModel: SignUpModel = new SignUpModel();

  constructor(public fb: FormBuilder, public router: Router, public http: Http, public signUpService: SignUpService) {

  }

  ngOnInit() {
    this.signUpForm = this.fb.group({
      email: [this.signUpModel.email, Validators.compose([
        Validators.required,
        Validators.minLength(5)])]
      ,
      passwords: this.fb.group(this.initPasswordValidationModel())
      ,
      telephone: this.fb.group(this.initTelephoneValidationModel())
    })


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
