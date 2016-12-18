import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ExamModule } from './exam/exam.module';
import { StartModule } from './start/start.module';
import { ExamsRoutes, ExamsComponent } from './index';


@NgModule({
    imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(ExamsRoutes), ExamModule, StartModule],
    declarations:  [ExamsComponent],
    exports: [ExamsComponent]
})

export class ExamsModule {

}
