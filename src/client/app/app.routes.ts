import { Routes } from '@angular/router';

import { AboutRoutes } from './about/index';
import { HomeRoutes } from './home/index';
import { LoginRoutes } from './login/index';
import { SignUpRoutes } from './signUp/index';
//import { McqRoutes } from './mcq/index';
import {QuestionRoutes} from './question/index';
export const routes: Routes = [
  ...HomeRoutes,
 // ...AboutRoutes,
  ...LoginRoutes,
  ...SignUpRoutes,
  //...McqRoutes,
  ...QuestionRoutes
];
