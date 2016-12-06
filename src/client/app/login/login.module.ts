import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ControlMessagesComponent } from '../shared/control-messages.component';
@NgModule({
    imports: [CommonModule,ReactiveFormsModule],
    declarations: [LoginComponent],
    exports: [LoginComponent]
})

export class LoginModule { 
    
    
    
}
