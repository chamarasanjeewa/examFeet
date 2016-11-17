import { Route } from '@angular/router';
import { HomeComponent } from './index';
import { AboutComponent } from '../about/index';
import { McqComponent } from '../mcq/index';
import {QuestionComponent} from '../question/index';
import {ChooseMcqComponent} from '../chooseMcq/index';
import {McqListComponent} from '../mcqList/index';


export const HomeRoutes: Route[] = [
  
  {
    path: '',
     component:HomeComponent,
    children:[
     
          { path: '', redirectTo: 'about', pathMatch: 'full' },
           { path: 'about',  component: AboutComponent}
       ,
        
        {
        path: 'mcq',
        component: McqComponent,
        children:[
           { path: '', redirectTo: 'chooseMcq', pathMatch: 'full' },
           { path: 'chooseMcq',  component: ChooseMcqComponent, pathMatch: 'full' },
           { path: 'mcqList',  component: McqListComponent, pathMatch: 'full' },
           
           
           { path: 'question',  component: QuestionComponent},
           { path: 'question',  component: QuestionComponent,outlet:'question'}
        ]
       }
  
    ]
    
  }

  
];
