import { Routes } from '@angular/router';

import { SignUpComponent,SignUpSuccessComponent } from './index';

export const SignUpRoutes: Routes = [
  { path: 'signup',component: SignUpComponent  },
   {path: 'signUpSuccess',   component: SignUpSuccessComponent}
];
