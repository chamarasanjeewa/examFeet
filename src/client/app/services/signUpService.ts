import { Http,Response,Headers,RequestOptions  } from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {SignUpModel} from '../models/SignUpModel';

@Injectable()
export class SignUpService{
    
    constructor(public http:Http){
        
    }
    
  public  registerUser(signUpModel:SignUpModel){
         let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option

         let registration = {
       // "companyName": registerData.companyName,
        "contactName":signUpModel.email,// registerData.contactName,
        "usertype": "CONSUMER",

        "phonenumber":signUpModel.telephone,
        "email": signUpModel.email,
        "companyName":signUpModel.email,
        "accountTypes": [
          "CONSUMER_MOBILE"
        ],
        "password": signUpModel.password,
        "address": "",//TODO
        "country": ""//TODO
      }
      var registrationJson = JSON.stringify(registration);
      
        
        return this.http.post('http://52.77.81.10:9000/api/consumer/account/singup', registrationJson, options) // ...using post request
                         .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                        // .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
 
        
    }
    
}