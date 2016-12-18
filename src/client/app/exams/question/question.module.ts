import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionContentComponent, 
         QuestionAnswerComponent,
         QuestionMcqComponent,
         QuestionTrueFalseComponent, 
         QuestionTypeComponent } from './index';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule],
    declarations: [QuestionContentComponent, QuestionMcqComponent, QuestionTrueFalseComponent, QuestionTypeComponent],
    exports: [QuestionContentComponent, QuestionMcqComponent, QuestionTrueFalseComponent, QuestionTypeComponent]
})

export class QuestionModule {}
