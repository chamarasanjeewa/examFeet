import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'
import { FormsModule } from "@angular/forms";
import { PaypalRoutes, PaypalComponent } from './index';


@NgModule({
    imports: [CommonModule, RouterModule.forChild(PaypalRoutes),FormsModule],
    declarations: [PaypalComponent],
    exports: [PaypalComponent]
})

export class PaypalModule { }
