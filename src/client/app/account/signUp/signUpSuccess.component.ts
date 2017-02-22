import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { SignUpService } from '../services/signUpService';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from '../services/validationService';
import { SharedService } from '../shared/sharedService';
import { Country } from '../models/country';
import { HttpService } from '../services/httpService';
//import * as _ from 'underscore';
/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-signUp',
  templateUrl: 'signUpSuccess.component.html',
  styleUrls: ['signUpSuccess.component.css'],
  providers: [SignUpService,HttpService]
})
export class SignUpSuccessComponent implements OnInit {

  constructor(public fb: FormBuilder, public router: Router, public http: Http, public signUpService: SignUpService) {

  }

  ngOnInit() {

  }
  
 
}
