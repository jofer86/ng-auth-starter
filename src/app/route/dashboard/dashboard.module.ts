import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { DynamicFieldComponent } from 'src/app/lib/dynamic-field/dynamic-field.component';
import { DynamicFormComponent } from 'src/app/lib/dynamic-form/dynamic-form.component';
import { FormGroupDirective } from '@angular/forms';
import { DynamicFormModule } from 'src/app/lib/dymanic-form.module';



@NgModule({
  declarations: [DashboardComponent, WarehouseComponent],
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
export class DashboardModule { }
