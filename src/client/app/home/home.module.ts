import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route } from '@angular/router';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CanActivateViaAuthGuard } from '../shared/canActivateAuthGuard';
import { HomeComponent, HomeRoutes } from './index';

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule],
  declarations: [HomeComponent],
  exports: [HomeComponent],
  providers: [CanActivateViaAuthGuard]
})

export class HomeModule { }
