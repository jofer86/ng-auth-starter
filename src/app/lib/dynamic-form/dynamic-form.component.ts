import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Field, KeyValuePair } from '../dynamic-form.model';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-dynamic-form',
  styleUrls: ['./dynamic-form.component.scss'],
  templateUrl: './dynamic-form.component.html'
})
export class DynamicFormComponent implements OnInit {
  @Input() fieldset: Field[]; // Required
  @Input() errors: Error[]; // Optional
  @Input() prefillData: KeyValuePair[]; // Optional (default values)
  @Input() readOnly = false; // Optional
  @Input() formTitle: string; // Required

  @Output() emitFormValues = new EventEmitter();

  form: FormGroup;
  formReady = false;

  private togglesWithChildren: { name: string; value: boolean; children: Field[] }[] = [];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    if (this.fieldset) {
      this.initializeForm();
    } else {
      console.warn('Please pass a fieldset into the dynamic form component.');
    }
  }

  initializeForm(): void {
    this.form = this.formBuilder.group({});
    let { fieldset } = this;

    for (let field of fieldset) {
      this.form.addControl(field.name, this.initializeFormControl(field));

      if (field.children) {
        for (let child of field.children) {
          this.form.addControl(child.name, this.initializeFormControl(child));
        }

        this.togglesWithChildren.push({
          children: field.children,
          name: field.name,
          value: field.defaultValue
        });
      }
    }

    this.handleSlideToggleChildren();
    this.formReady = true;
  }

  initializeFormControl(field: Field): FormControl {
    let value: string | boolean | undefined;

    if (typeof field.defaultValue !== 'undefined') {
      value = field.defaultValue;
    }

    if (field.type === 5) {
      if (typeof value === 'undefined') {
        value = true;
      }

      if (field.defaultValue === false) {
        this.hideChildren(field);
      }
    }

    if (this.prefillData) {
      const defaultValue = this.prefillData.filter((element) => element.key === field.name);
      if (defaultValue.length) value = defaultValue[0].value;
    }

    const validation: any = field.validation ? field.validation : [];
    const isDisabled = field.disabled || this.readOnly ? true : false;

    return this.formBuilder.control({ value, disabled: isDisabled }, validation);
  }

  handleSlideToggleChildren(): void {
    for (let parent of this.togglesWithChildren) {
      this.form.controls[parent.name].valueChanges.subscribe((value) => {
        this.toggleChildren(parent.name, value);
      });
    }
  }

  toggleChildren(name: string, toggleValue: boolean): void {
    const parentIndex = this.fieldset.findIndex((field) => field.name === name);
    if (toggleValue) {
      this.showChildren(parentIndex);
    } else {
      this.hideChildren(parentIndex);
    }
  }

  hideChildren(parentIndex: number | Field): void {
    const parent = { ...this.fieldset[parentIndex as number] };

    for (let [index, child] of parent.children.entries()) {
      this.form.get(child.name).disable();
      parent.children[index].visible = false;
    }
  }

  showChildren(parentIndex: number): void {
    const parent = { ...this.fieldset[parentIndex] };
    for (let [index, child] of parent.children.entries()) {
      this.form.get(child.name).enable();
      parent.children[index].visible = true;
    }
  }

  onSubmit(form: any): void {
    this.emitFormValues.emit(this.extractFormValues(form));
  }

  extractFormValues(form: any): any {
    const formValues: KeyValuePair[] = [];
    if (form.controls) {
      for (let key of Object.keys(form.controls)) {
        if (form.controls[key].controls) {
          formValues.push({ key, value: this.extractFormValues(form.controls[key]) });
        } else {
          formValues.push({ key, value: form.get(key).value });
        }
      }
    }

    let formObject = {};
    for (let { key, value } of formValues) {
      formObject[key] = value;
    }

    // Keeping both versions of the response in case we need either use case.

    return { formObject, formValues };
  }
}
