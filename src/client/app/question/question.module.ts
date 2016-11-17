import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './question.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule,ReactiveFormsModule],
    declarations: [QuestionComponent],
    exports: [QuestionComponent]
})

export class QuestionModule { 
    
    
    
}
