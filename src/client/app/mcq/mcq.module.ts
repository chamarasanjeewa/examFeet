import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { McqComponent } from './mcq.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { McqRoutes } from './mcq.routes';
@NgModule({
    imports: [CommonModule,ReactiveFormsModule,RouterModule],
    declarations: [McqComponent],
    exports: [McqComponent]
})

export class McqModule { 
    
    
    
}
