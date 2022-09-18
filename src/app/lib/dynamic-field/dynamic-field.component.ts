import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroupDirective } from '@angular/forms';
import { Field, FieldType } from '../dynamic-form.model';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-dynamic-field',
  styleUrls: ['./dynamic-field.component.scss'],
  templateUrl: './dynamic-field.component.html'
})
export class DynamicFieldComponent implements OnInit {
  @Input() field: Field;
  control: FormControl;
  FieldType = FieldType;
  constructor(private formGroupDir: FormGroupDirective) {}

  ngOnInit(): void {
    /**
     * @angular/forms -> FormGroupDirective! 🎉
     *
     * https://angular.io/api/forms/FormGroupDirective
     * "Binds an existing FormGroup to a DOM element."
     *
     * We can easily access Reactive Forms functionality from this component in our
     * parent component without the need to pass our own inputs or event emitters.
     */
    this.control = this.formGroupDir.control.get(this.field.name) as FormControl;
  }
}
