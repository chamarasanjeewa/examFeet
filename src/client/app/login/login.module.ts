import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginRoutes } from './index';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login.component';
import { ControlMessagesComponent } from '../shared/control-messages.component';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, SharedModule, RouterModule.forChild(LoginRoutes)],
    declarations: [LoginComponent],
    exports: [LoginComponent]
})

export class LoginModule { 
    
    
    
}
