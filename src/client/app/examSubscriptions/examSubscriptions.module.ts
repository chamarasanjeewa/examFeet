import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
//import { ExamSubscriptionsComponent } from './examSubscriptions.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ExamSubscriptionsComponent, ExamSubscriptionsRoutes } from './index';
@NgModule({
    imports: [CommonModule,ReactiveFormsModule,RouterModule.forChild(ExamSubscriptionsRoutes)],
    declarations: [ExamSubscriptionsComponent],
    exports: [ExamSubscriptionsComponent]
})

export class ExamSubscriptionsModule { 
    
   
}
