import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionsModule } from '../questions/questions.module';
import { StartComponent } from './index';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, QuestionsModule],
    declarations: [StartComponent],
    exports: [StartComponent]
})

export class StartModule {}
