import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { AngularMaterialModule } from 'src/app/angular-material.module';
import { DynamicFieldComponent } from 'src/app/lib/dynamic-field/dynamic-field.component';
import { DynamicFormComponent } from 'src/app/lib/dynamic-form/dynamic-form.component';
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
