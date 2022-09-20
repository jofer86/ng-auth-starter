import { Validators } from '@angular/forms';

export enum FieldType {
  CHECKBOX,
  DATEPICKER,
  RADIO,
  SELECTDROPDOWN,
  SELECTLIST,
  SLIDETOGGLE,
  TEXTAREA,
  TEXTFIELD,
  SUBHEADER,
  DIVIDER,
  PASSWORD
}

export interface Field {
  name: string;
  type: FieldType;
  children?: Field[];
  label?: string;
  defaultValue?: any;
  disabled?: boolean;
  options?: string[];
  placeholder?: string;
  parent?: string;
  validation?: Validators[];
  visible?: boolean;
}

export interface KeyValuePair {
  key: string;
  value: any;
}

export interface Error {
  name: string;
  text: string;
  rules: Validators[];
}
