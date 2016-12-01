import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { McqListComponent } from './mcqList.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
    imports: [CommonModule,ReactiveFormsModule],
    declarations: [McqListComponent],
    exports: [McqListComponent]
})

export class McqListModule { 
    
   
}
