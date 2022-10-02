import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { FormGroupDirective } from '@angular/forms';
import { DynamicFormModule } from 'src/app/lib/dymanic-form.module';
import { HomeComponent } from './home/home.component';
import { AddUserComponent } from './home/add-user/add-user.component';

@NgModule({
  declarations: [DashboardComponent, HomeComponent, AddUserComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    DashboardRoutingModule,
    RouterModule,
    AngularMaterialModule,
    DynamicFormModule
  ],
  providers: [FormGroupDirective]
})
export class DashboardModule {}
