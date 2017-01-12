import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { SignUpModel } from '../models/SignUpModel';
import { HttpService } from './httpService';
@Injectable()
export class McqService {
  apiEndPoint: string = 'http://52.77.81.10:9000/api/';
  constructor(public http: Http, public httpService: HttpService) {

  }



  public getCountryList() {

    var url = this.apiEndPoint + 'consumer/countries';

    var countryRequest = {
      "serviceFiltered": false
    }

    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option

    let countryRequestJson = JSON.stringify(countryRequest);

    return this.http.post(url, countryRequestJson, options) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
    // .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any

  }

  public getFacultyList() {

    var url = this.apiEndPoint + 'consumer/faculties';


    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option

    var facultyRequestJson = JSON.stringify('');

    return this.http.get(url) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
    // .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any




  }

  public getSpecializationList(selectedFaculty: any) {
    var url = this.apiEndPoint + 'consumer/specialize/specializes/faculty/id/' + selectedFaculty;//'specializations';

    return this.http.get(url) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data

    //   return $http.get(url)
    //  .then(function (response) {
    //       return response;
    //   }).catch(function (e) {
    //       console.log("error", e);
    //        loggerService.showServerErrorToast();
    //                // throw e;
    //   }) .finally(function () {

    //   });
  }

  public getSearchResultList(searchOptions: any) {

    let url = this.apiEndPoint + 'consumer/services';


    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option


    let requestJson = JSON.stringify(searchOptions);

    return this.http.post(url, requestJson, options) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data


  }

  public getQuestionsByServiceId(id: number) {
    var url = 'consumer/selectedservice';
    var params = {
      "serviceId": id
    }
    let searchOptionsJson = JSON.stringify(params);
    let headers = this.httpService.getHttpHeaders();
    headers.append("Content-Type", 'application/json');
    var parameters: Object = {
      url: url,
      headers: headers,
      body: searchOptionsJson
    }

    return this.httpService.httpPostRequestObservable(parameters);

  }

  public subscribeSelectedExam(params: any) {
debugger;
    var url = 'consumer/services/subscribe/new';
    let headers = this.httpService.getHttpHeaders();
    headers.append("Content-Type", 'application/json');
    
    var parameters: Object = {
      url: url,
      headers: headers,
      body: JSON.stringify(params)
    }
   
    return this.httpService.httpPostRequestObservable(parameters);
  }

  public getSubscribedSessions(userId: number) {

    var url = 'consumer/services/subscriptions';
    var params = {
      "userId": userId
    }

    let searchOptionsJson = JSON.stringify(params);

    let headers = this.httpService.getHttpHeaders();
    headers.append("Content-Type", 'application/json');
    var parameters: Object = {
      url: url,
      headers: headers,
      body: searchOptionsJson
    }

    return this.httpService.httpPostRequestObservable(parameters);
   


  }

}