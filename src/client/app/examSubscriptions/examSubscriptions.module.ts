import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamSubscriptionsComponent } from './examSubscriptions.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
    imports: [CommonModule,ReactiveFormsModule],
    declarations: [ExamSubscriptionsComponent],
    exports: [ExamSubscriptionsComponent]
})

export class ExamSubscriptionsModule { 
    
   
}
