import { Routes } from '@angular/router';
import { PaypalComponent,PaypalDoneComponent } from './index';

export const PaypalRoutes: Routes = [
  { path: '', pathMatch: 'full', component: PaypalComponent },
  { path: 'done', component: PaypalDoneComponent  }
];