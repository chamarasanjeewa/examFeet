import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashBoardRoutes, DashBoardComponent } from './index';

@NgModule({
    imports: [CommonModule, RouterModule.forChild(DashBoardRoutes)],
    declarations: [DashBoardComponent],
    exports: [DashBoardComponent]
})

export class DashBoardModule {}
