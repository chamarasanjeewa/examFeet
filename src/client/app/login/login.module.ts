import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ControlMessagesComponent } from '../shared/control-messages.component';
@NgModule({
    imports: [CommonModule,ReactiveFormsModule,SharedModule],
    declarations: [LoginComponent],
    exports: [LoginComponent]
})

export class LoginModule { 
    
    
    
}
