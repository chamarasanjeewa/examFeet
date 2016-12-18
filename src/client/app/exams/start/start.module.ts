import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionModule } from '../question/question.module';
import { TryComponent, StartComponent } from './index';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, QuestionModule],
    declarations: [TryComponent, StartComponent],
    exports: [TryComponent, StartComponent]
})

export class StartModule {}
