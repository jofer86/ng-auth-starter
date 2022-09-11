import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { WarehouseComponent } from './warehouse/warehouse.component';



@NgModule({
  declarations: [DashboardComponent, WarehouseComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    DashboardRoutingModule,
    RouterModule,
    AngularMaterialModule
  ]
})
export class DashboardModule { }
