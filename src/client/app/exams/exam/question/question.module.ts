import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionComponent } from './index';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule],
    declarations: [QuestionComponent],
    exports: [QuestionComponent]
})

export class QuestionModule {}
