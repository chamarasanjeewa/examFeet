import { Routes } from '@angular/router';
import { LoginComponent } from './index';

export const LoginRoutes: Routes = [
   //{ path: 'login',   loadChildren: 'app/login/login.module#LoginModule'},
   { path: 'login', pathMatch: 'full', component: LoginComponent }
];
