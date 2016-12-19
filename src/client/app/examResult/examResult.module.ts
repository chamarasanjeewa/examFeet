import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ExamResultComponent, ExamResultRoutes } from './index';
import { RouterModule } from '@angular/router';
@NgModule({
    imports: [CommonModule,ReactiveFormsModule,RouterModule.forChild(ExamResultRoutes)],
    declarations: [ExamResultComponent],
    exports: [ExamResultComponent]
})

export class ExamResultModule { 
    
   
}
