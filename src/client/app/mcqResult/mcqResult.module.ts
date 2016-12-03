import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { McqResultComponent } from './mcqResult.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
    imports: [CommonModule,ReactiveFormsModule],
    declarations: [McqResultComponent],
    exports: [McqResultComponent]
})

export class McqResultModule { 
    
   
}
