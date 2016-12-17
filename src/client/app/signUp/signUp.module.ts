import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './signUp.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SignUpRoutes } from './index';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [CommonModule,ReactiveFormsModule,SharedModule, RouterModule.forChild(SignUpRoutes)],
    declarations: [SignUpComponent],
    exports: [SignUpComponent]
})

export class SignUpModule { 
    
    
    
}
