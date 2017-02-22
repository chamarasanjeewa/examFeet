import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutRoutes, AboutComponent } from './index';

@NgModule({
    imports: [CommonModule, RouterModule.forChild(AboutRoutes)],
    declarations: [AboutComponent],
    exports: [AboutComponent]
})

export class AboutModule { }
