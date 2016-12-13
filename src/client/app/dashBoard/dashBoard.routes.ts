import { Routes } from '@angular/router';
import { DashBoardComponent } from './index';

export const DashBoardRoutes: Routes = [
  { path: '', pathMatch: 'full', component: DashBoardComponent }
];