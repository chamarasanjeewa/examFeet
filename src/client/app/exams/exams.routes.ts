import { Route, Router } from '@angular/router';
import { ExamsHomeomponent } from './index';
import { ExamsComponent } from './index';
import { ExamComponent } from './index';
import { ExamTryComponent } from './index';

export const ExamsRoutes: Route[] = [
  {
    path: 'exams', component: ExamsHomeomponent,
    children: [
      { path: '', component: ExamsComponent },
      { path: ':id', component: ExamComponent },
      { path: ':id/try', component: ExamTryComponent },
      // {
      //   path: ':id', component: ExamComponent,
      //   children: [
      //     { path: 'try', component: ExamTryComponent }//,
      //     // { path: 'purchase', component: ExamComponent }
      //   ]
      // }
    ]
  }
];
