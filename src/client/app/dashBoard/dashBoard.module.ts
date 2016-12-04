import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashBoardComponent } from './dashBoard.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
    imports: [CommonModule,ReactiveFormsModule],
    declarations: [DashBoardComponent],
    exports: [DashBoardComponent]
})

export class DashBoardModule { 
    
   
}
