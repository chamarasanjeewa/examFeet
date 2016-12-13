import { Routes } from '@angular/router';
import { AboutComponent } from './index';

export const AboutRoutes: Routes = [
  { path: '', pathMatch: 'full', component: AboutComponent }
];