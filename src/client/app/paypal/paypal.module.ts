import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaypalComponent } from './paypal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [CommonModule,ReactiveFormsModule,RouterModule,FormsModule],
    declarations: [PaypalComponent],
    exports: [PaypalComponent]
})

export class PaypalModule { 
    
    
    
}
