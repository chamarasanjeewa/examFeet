import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardRoutes, DashboardComponent } from './index';

@NgModule({
    imports: [CommonModule, RouterModule.forChild(DashboardRoutes)],
    declarations: [DashboardComponent],
    exports: [DashboardComponent]
})

export class DashBoardModule {}
