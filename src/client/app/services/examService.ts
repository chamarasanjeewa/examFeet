import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
//import { HttpService } from './httpService';


@Injectable()
export class ExamService {

  apiEndPoint: string = 'http://52.77.81.10:9000/api/';
  requestOptions: RequestOptions;

  //,public httpService:HttpService){
  constructor(public http: Http) {
    this.requestOptions = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    });
  }


  public getCountries() {
    var url = this.apiEndPoint + 'consumer/countries';
    var body = {
      "serviceFiltered": false
    };

    return this.http.post(url, body, this.requestOptions)
      .map((res: Response) => res.json())
  }

  public getFaculties() {
    var url = this.apiEndPoint + 'consumer/faculties';

    return this.http.get(url)
      .map((res: Response) => res.json())
  }

  public getFacultySpecializations(facultyId: any) {
    var url = this.apiEndPoint + 'consumer/specialize/specializes/faculty/id/' + facultyId;

    return this.http.get(url)
      .map((res: Response) => res.json());
  }

  public getExams(options: any) {
    var url = this.apiEndPoint + 'consumer/services';

    return this.http.post(url, options, this.requestOptions)
      .map((res: Response) => res.json());
  }

  public getExamInfo(options: any) {
    var url = this.apiEndPoint + 'consumer/selectedservice';

    return this.http.post(url, options, this.requestOptions)
      .map((res: Response) => res.json());
  }

  public getSampleExamQuestions(options: any) {
    /* 
          var params = {
        "serviceId": selectedExamInfo.serviceId
      }
    } */

    var url = this.apiEndPoint + 'consumer/services/practice/samplequestions';

    return this.http.post(url, options, this.requestOptions)
      .map((res: Response) => res.json());
  }

  public hasUserSubsubribedToExam(options: any) {
    /*
      var parms={"userId":authentService.getUser().userId,"serviceId":""}     
     */
    var url = this.apiEndPoint + 'consumer/services/subscribe/new';

    return this.http.post(url, options, this.requestOptions)
      .map((res: Response) => res.json());
  }

  public getSubscribedExamQuestions(options: any) {
    /* var params = {
      "email": user.email,
      "serviceId": selectedExamInfo.id,
      "subscriptionId": $scope.subscriptionId
    } */

    var url = this.apiEndPoint + 'consumer/service/user/new/session';

    return this.http.post(url, options, this.requestOptions)
      .map((res: Response) => res.json());
  }
  public sendExamQuestionAnswer(value: any) {
    /*  var answerParam={
        "uniqueSessionIdentifier": $scope.sessionInfo.uniqueSessionIdentifier,
        "email": user.email,
        "serviceId": $scope.serviceId,
        "questionId": $scope.currentQuestion.questionId,
        "answer": result.isAnswerCorrect,
        "currentAnsweringQuestion":  questionHandler.getCurrentQuestionId(),
        "totalNumberOfQuestions": questionHandler.getTotalQuestionCount(),
        "answerUpdateDto": {
          "quectionType": $scope.currentQuestion.questionType,
          "answer": result.usersAnswer,
          "answerIds": result.answerIds
        },
        "spendTimeOnQuection": $scope.currentTime
      }
    } */

    var url = this.apiEndPoint + 'consumer/exam/answer';

    return this.http.post(url, value, this.requestOptions)
      .map((res: Response) => res.json());
  }

  public getSubscribedSessions(options: any) {

    /* var params={"userId":parseInt(user.userId)}; */

    var url = this.apiEndPoint + 'consumer/services/subscriptions';

    return this.http.post(url, options, this.requestOptions)
      .map((res: Response) => res.json());
  }


  public restartExamSessions(options: any) {

    /* var params={"userId":parseInt(user.userId)}; */

    var url = this.apiEndPoint + 'consumer/services/session/restart/' + options.sessionId + '/' + options.serviceId;

    return this.http.get(url)
      .map((res: Response) => res.json());
  }


  public subscribeToExam(options: any) {

    //     var paymentInfo= {
    //       "payment": {
    //         "noOfMonths":$scope.selectedExamMonth.id,
    //         "priceId":$scope.selectedExam.price.priceId,
    //         "currencyCode": $scope.selectedExam.price.currencyCode,//TODO currencyCode
    //         "startDate": startDate,
    //         "endDate":formattedEndateForAnswer, 
    //         "paymentMethod": "paypal",
    //         "amount": $scope.examSubscriptionPrice
    //       },
    //       "serviceId":$scope.selectedExam.id,
    //       "userId": authentService.getUser().userId
    //  }

    var url = this.apiEndPoint + 'consumer/services/subscribe/new';

    return this.http.post(url, options, this.requestOptions)
      .map((res: Response) => res.json());
  }


  public getDonatedExam(options: any) {
    /* 		var params={
         secretCode: donatedExam.examCode,
         userId:userId,
         email: email
     } */
    var url = this.apiEndPoint + 'consumer/services/subscribe/donated';

    return this.http.post(url, options, this.requestOptions)
      .map((res: Response) => res.json());
  }


}