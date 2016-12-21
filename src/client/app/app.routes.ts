 import { Routes } from '@angular/router';

// import { AboutRoutes } from './about/index';
// import { HomeRoutes } from './home/index';
 import { LoginRoutes } from './login/index';
 import { SignUpRoutes } from './signUp/index';
// //import { McqRoutes } from './mcq/index';
// //import {QuestionRoutes} from './question/index';
// //import { ExamRoutes } from './exams/exam/index';
// //import { McqPurchaseRoutes } from './mcqPurchase/index';
// import { ExamsRoutes } from './exams/index';


 export const routes: Routes = [
    //    { path: 'login',   loadChildren: 'app/login/login.module#LoginModule'},
    //    { path: 'signUp',   loadChildren: 'app/signUp/signUp.module#SignUpModule'}
//   ...HomeRoutes,
//  // ...AboutRoutes,
   ...LoginRoutes,
   ...SignUpRoutes,
//   //...McqRoutes,
//   //...QuestionRoutes,
//   //...ExamRoutes,
//   //...McqPurchaseRoutes,
//   ...ExamsRoutes
 ];
