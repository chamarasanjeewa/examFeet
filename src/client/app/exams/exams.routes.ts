import { Routes } from '@angular/router';
import { ExamsComponent, ExamComponent, StartComponent } from './index';

export const ExamsRoutes: Routes = [
  { path: '', component: ExamsComponent },
  { path: ':id', component: ExamComponent  },
  { path: ':id/try', component: StartComponent  },
  { path: ':id/start', component: StartComponent  },
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
