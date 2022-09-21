import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { AngularMaterialModule } from '../angular-material.module';
import { DynamicFieldComponent } from '../lib/dynamic-field/dynamic-field.component'
import { DynamicFormComponent } from '../lib/dynamic-form/dynamic-form.component';
import { FormGroupDirective, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [DynamicFormComponent, DynamicFieldComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ],
  providers: [FormGroupDirective],
  exports: [DynamicFormComponent, DynamicFieldComponent]

})
export class DynamicFormModule { }
