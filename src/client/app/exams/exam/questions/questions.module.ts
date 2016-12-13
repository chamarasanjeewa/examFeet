import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionModule } from '../question/question.module';
import { QuestionComponent, QuestionsComponent } from './index';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, QuestionModule],
    declarations: [QuestionsComponent],
    exports: [QuestionsComponent]
})

export class QuestionsModule { 
    
}
