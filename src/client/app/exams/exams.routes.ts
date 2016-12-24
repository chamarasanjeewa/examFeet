import { Routes } from '@angular/router';
import { ExamsComponent, ExamComponent, TryComponent, StartComponent,BeforeStartComponent } from './index';

export const ExamsRoutes: Routes = [
  { path: '', component: ExamsComponent },
  { path: ':id', component: ExamComponent  },
  { path: ':id/try', component: TryComponent  },
  { path: ':id/start', component: StartComponent  },
  { path: ':id/beforeStart', component: BeforeStartComponent  },
];



// export const ExamsRoutes: Route[] = [
//   {
//     path: '',
//     children: [
//       { path: '', pathMatch: 'full', component: ExamsComponent },
//       { path: ':id', loadChildren: 'app/exams/exam/exam.module#ExamModule' }
//     ]
//   }
// ];
