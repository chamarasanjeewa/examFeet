import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
//import { routes } from './app.routes';
import { HomeRoutes } from './home/index';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from './shared/shared.module';
// import { AboutModule } from './about/about.module';
// import { LoginModule } from './login/login.module';
// import { SignUpModule } from './signUp/signUp.module';
// import { McqModule } from './mcq/mcq.module';
import { HomeModule } from './home/home.module';
//import { QuestionModule } from './question/question.module';
// import { ChooseMcqModule } from './chooseMcq/chooseMcq.module';
// import { McqPurchaseModule } from './mcqPurchase/mcqPurchase.module';
// import { McqResultModule } from './mcqResult/mcqResult.module';
// import { ExamSubscriptionsModule } from './examSubscriptions/examSubscriptions.module';
//import { PaypalModule } from './paypal/Paypal.module'
// import { DashBoardModule } from './dashBoard/DashBoard.module'
//import { ExamModule } from './exam/exam.module';
// import {ExamStartModule } from './examStart/examStart.module';

// import { ExamsModule } from './exams/exams.module';

@NgModule({
  imports: [BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(HomeRoutes),
    // PaypalModule,
    // DashBoardModule,
    // McqPurchaseModule,
    // McqResultModule,
    // ExamSubscriptionsModule,
    // ChooseMcqModule, 
    // McqModule, 
    // QuestionModule, 
    // AboutModule, 
    HomeModule,
    // LoginModule, 
    // SignUpModule,
    // ExamStartModule,
    SharedModule.forRoot()
    //ExamModule,
  ],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})

export class AppModule { }
