import { Routes } from '@angular/router';
import { PaypalComponent } from './index';

export const AboutRoutes: Routes = [
  { path: '', pathMatch: 'full', component: PaypalComponent }
];