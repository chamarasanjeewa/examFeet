import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExamComponent } from './index';
import { FormsModule } from '@angular/forms';
@NgModule({
    imports: [CommonModule, RouterModule,FormsModule],
    declarations:  [ExamComponent],
    exports: [ExamComponent]
})

export class ExamModule {

}
