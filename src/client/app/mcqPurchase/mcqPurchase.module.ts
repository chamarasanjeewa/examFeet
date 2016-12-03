import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { McqPurchaseComponent } from './mcqPurchase.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
    imports: [CommonModule,ReactiveFormsModule],
    declarations: [McqPurchaseComponent],
    exports: [McqPurchaseComponent]
})

export class McqPurchaseModule { 
    
   
}
