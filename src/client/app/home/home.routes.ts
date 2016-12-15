import { Routes } from '@angular/router';
import { HomeComponent } from './index';
// import { AboutComponent } from '../about/index';
// import { DashBoardComponent } from '../dashBoard/dashBoard.component';
// import { ExamSubscriptionsComponent } from '../examSubscriptions/index';
// import { ExamsComponent } from '../exams/index';
// import { PaypalComponent } from '../paypal/paypal.component';
import { CanActivateViaAuthGuard } from '../shared/canActivateAuthGuard';

export const HomeRoutes: Routes = [
  {
    path: '', component: HomeComponent,
    children:[
          { path: '', redirectTo: 'about', pathMatch: 'full' },
          { path: 'about',   loadChildren: 'app/about/about.module#AboutModule'},
          { path: 'login',   loadChildren: 'app/login/login.module#LoginModule'},
          // { path: 'mySubscriptions',  
          //   component: ExamSubscriptionsComponent, 
          //   canActivate: [CanActivateViaAuthGuard]
          // }, 
          { path: 'dashBoard',   loadChildren: 'app/dashBoard/dashBoard.module#DashBoardModule'},
          {
            path: 'exams',
            loadChildren: 'app/exams/exams.module#ExamsModule',
            canActivate: [CanActivateViaAuthGuard]
          },
          {
            path: 'paypal',
            loadChildren: 'app/paypal/paypal.module#PaypalModule'//,
          //  canActivate: [CanActivateViaAuthGuard]
          }
      ]
  }
];
