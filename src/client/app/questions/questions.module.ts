import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionsComponent } from './questions.component';
import { QuestionComponent } from './question.component';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule],
    declarations: [QuestionsComponent, QuestionComponent],
    exports: [QuestionsComponent, QuestionComponent]
})

export class QuestionsModule { 
    
}
