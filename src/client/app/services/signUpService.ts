import { Http,Response,Headers,RequestOptions  } from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {SignUpModel} from '../models/SignUpModel';
import {HttpService} from './httpService';


@Injectable()
export class SignUpService{
    
    constructor(public http:Http,public httpService:HttpService){
        
    }
    
  public  registerUser(signUpModel:SignUpModel){
      //  let options       = new RequestOptions({ headers: headers }); // Create a request option
 
         let registration = {
       // "companyName": registerData.companyName,
        "contactName":signUpModel.email,// registerData.contactName,
        "usertype": "CONSUMER",

        "phonenumber":signUpModel.telephone.telephoneNumber,
        "email": signUpModel.email,
        "companyName":signUpModel.email,
        "accountTypes": [
          "CONSUMER_MOBILE"
        ],
        "password": signUpModel.password,
        "address": "",//TODO
        "country": ""//TODO
      }
      
        let url='consumer/account/singup';
           var registrationJson = JSON.stringify(registration);
             let headers=this.httpService.getHttpHeaders();
             headers.append("Content-Type", 'application/json');
            var params: Object = {
            url: url,
            headers: headers,
            body:registrationJson
        };

        return this.httpService.httpPostRequestObservable(params);
        
        
    }
    
}