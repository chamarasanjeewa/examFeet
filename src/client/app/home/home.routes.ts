import { Route } from '@angular/router';
import { HomeComponent } from './index';
import { AboutComponent } from '../about/index';
import { McqComponent } from '../mcq/index';
import {QuestionComponent} from '../question/index';
import {ChooseMcqComponent} from '../chooseMcq/index';
import {McqPurchaseComponent} from '../mcqPurchase/index';
import {PaypalComponent} from '../paypal/paypal.component';
import {ExamSubscriptionsComponent} from '../examSubscriptions/index';

export const HomeRoutes: Route[] = [
  
  {
    path: '',
     component:HomeComponent,
    children:[
     
          { path: '', redirectTo: 'about', pathMatch: 'full' },
          { path: 'about',  component: AboutComponent},
          { path: 'mySubscriptions',  component: ExamSubscriptionsComponent}
          
       ,
        
        {
        path: 'mcq',
        component: McqComponent,
        children:[
           { path: '', redirectTo: 'chooseMcq', pathMatch: 'full' },
           { path: 'chooseMcq',  component: ChooseMcqComponent, pathMatch: 'full' },
           { path: 'mcqPurchase/:id',  component: McqPurchaseComponent },
            { path: 'paypal',  component: PaypalComponent },
          
           
           { path: 'question',  component: QuestionComponent},
           { path: 'question',  component: QuestionComponent,outlet:'question'}
        ]
       }
  
    ]
    
  }

  
];
