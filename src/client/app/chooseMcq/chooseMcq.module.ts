import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChooseMcqComponent } from './chooseMcq.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
    imports: [CommonModule,ReactiveFormsModule],
    declarations: [ChooseMcqComponent],
    exports: [ChooseMcqComponent]
})

export class ChooseMcqModule { 
    
    
    
}
