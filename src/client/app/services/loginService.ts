import { Http,Response,Headers,RequestOptions,RequestMethod,Request  } from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {LoginModel} from '../models/LoginModel';
import {HttpService} from './httpService';

@Injectable()
export class LoginService{
    
    constructor(public http:Http,public httpService:HttpService){
        
    }
    
  public  authenticateUser(user:LoginModel){
        // let headers = new Headers();
        // headers.append("Content-Type", 'application/json');
        //  let options       = new RequestOptions({ headers: headers }); // Create a request option

        let loginInfo = {
        "username":user.userName,
        "password": user.password
      }
    //   let requestoptions = new RequestOptions({
    //         method: RequestMethod.Post,
    //         url: 'http://52.77.81.10:9000/api/consumer/account/login',
    //         headers: headers,
    //         body: JSON.stringify(loginInfo)
    //     })
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
            
            //   return this.http.request(new Request(requestoptions))
            //    .map((res:Response) => res.json())
            // // .map((res: Response) => {
            //     if (res) {
            //         return [{ status: res.status, json: res.json() }]
            //     }
           // });
        
        // return this.http.post('http://52.77.81.10:9000/api/consumer/account/login', loginJson, options) // ...using post request
        //                  .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
        //                 // .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
 
        
    }
    
}