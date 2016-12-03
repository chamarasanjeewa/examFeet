import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { FormsModule,ReactiveFormsModule  }   from '@angular/forms';

import { AboutModule } from './about/about.module';
import { LoginModule } from './login/login.module';
import { SignUpModule } from './signUp/signUp.module';
import { McqModule } from './mcq/mcq.module';
import { HomeModule } from './home/home.module';
import { QuestionModule } from './question/question.module';
import { ChooseMcqModule } from './chooseMcq/chooseMcq.module';
import { McqPurchaseModule } from './mcqPurchase/mcqPurchase.module';
import { McqResultModule } from './mcqResult/mcqResult.module';
import {ExamSubscriptionsModule} from './examSubscriptions/examSubscriptions.module';
import {PaypalModule} from './paypal/Paypal.module'

import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [BrowserModule,PaypalModule, HttpModule,McqPurchaseModule,McqResultModule,ExamSubscriptionsModule,ReactiveFormsModule , RouterModule.forRoot(routes),ChooseMcqModule,McqModule,QuestionModule, AboutModule, HomeModule,LoginModule,SignUpModule, SharedModule.forRoot()],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})

export class AppModule { }
