import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ExamComponent } from './index';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, RouterModule],
    declarations:  [ExamComponent],
    exports: [ExamComponent]
})

export class ExamModule {

}
