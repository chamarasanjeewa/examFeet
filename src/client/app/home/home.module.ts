import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { Route } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HomeRoutes } from './home.routes';
@NgModule({
  imports: [CommonModule, SharedModule,RouterModule],
  declarations: [HomeComponent],
  exports: [HomeComponent],
  providers: []
})
export class HomeModule { }
