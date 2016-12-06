import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionsModule } from '../questions/questions.module';
import { ExamsHomeomponent } from './exams.home.component';
import { ExamsComponent } from './exams.component';
import { ExamComponent } from './exam.component';
import { ExamTryComponent } from './exam.try.component';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, RouterModule, QuestionsModule],
    declarations:  [ExamsHomeomponent, ExamsComponent, ExamComponent, ExamTryComponent],
    exports: [ExamsHomeomponent, ExamsComponent, ExamComponent, ExamTryComponent]
})

export class ExamsModule {

 }
