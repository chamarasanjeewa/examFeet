import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamStartComponent } from './examStart.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule,ReactiveFormsModule],
    declarations: [ExamStartComponent],
    exports: [ExamStartComponent]
})

export class ExamStartModule { 
    
   
}
