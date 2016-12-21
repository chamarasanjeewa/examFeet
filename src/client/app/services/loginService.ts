import { Http,Response,Headers,RequestOptions,RequestMethod,Request  } from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {LoginModel} from '../models/LoginModel';
import {HttpService} from './httpService';
public httpService:HttpService
@Injectable()
export class LoginService{
    
    constructor(public http:Http,public httpService:HttpService){
        
    }
    
  public  authenticateUser(user:LoginModel){
       
         let loginInfo = {
        "username":user.userName,
        "password": user.password
      }
   
          let url='consumer/account/login';
          var loginJson = JSON.stringify(loginInfo);
             let headers=this.httpService.getHttpHeaders();
             headers.append("Content-Type", 'application/json');
            var params: Object = {
            url: url,
            headers: headers,
            body:loginJson
        };

        return this.httpService.httpPostRequestObservable(params);
            
          
    }
    
}