import { Routes } from '@angular/router';
import { DashboardComponent } from './index';

export const DashboardRoutes: Routes = [
  { path: '', pathMatch: 'full', component: DashboardComponent }
];