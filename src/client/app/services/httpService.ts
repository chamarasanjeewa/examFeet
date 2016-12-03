import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';
import { HOST_URL, REQUEST_TIME_OUT_TIME } from './config';

@Injectable()
export class HttpService {
    timeOutErrorMessage = "";
    constructor(private http: Http
       
    ) {


    }
    

    public httpPostRequestObservable(postParams: any) {
            return this.http.post(HOST_URL +postParams.url, postParams.body, {
                headers: postParams.headers
            })
                .timeout(REQUEST_TIME_OUT_TIME, { "status": 408 })
                .map(response => response.json());
       
    }

    
    public httpGetRequestObservable(getParams: any) {

           // getParams.headers.append('Authorization', 'Bearer ' + this.sessionHelper.getAccessToken());
           //   getParams.headers.append('X-Device', 'Mobile');
            return this.http.get(HOST_URL + getParams.url, {
                headers: getParams.headers
            })
                .timeout(REQUEST_TIME_OUT_TIME, { "status": 408 })
                .map(response => response.json());
        
       
    }

    public httpPutRequestObservable(putParams: any) {
    
             var body: Object = putParams.body ? putParams.body : {} ; 
           // putParams.headers.append('Authorization', 'Bearer ' + this.sessionHelper.getAccessToken());
          //   putParams.headers.append('X-Device', 'Mobile');
            return this.http.put(HOST_URL + putParams.url, body, {
                headers: putParams.headers
            })
                .timeout(REQUEST_TIME_OUT_TIME, { "status": 408 })
                .map(response => response.json());
        
       
    }

    //Generates basic HTTP request headers.
    public getHttpHeaders() {
        
        var headers: Headers = new Headers();
       // headers.append('Cache-Control', 'no-cache');
       // headers.append('X-Device', 'Mobile');
       
        return headers;
    }

    //Generates additional HTTP request headers.
    public getAdditionalHttpHeaders(headersList: any) {
        var headers: Headers = this.getHttpHeaders();

        if (headersList && headersList.length > 0) {
            for (let header of headersList) {
                headers.append(header.key, header.value);
            }
        }

        return headers;
    }

}