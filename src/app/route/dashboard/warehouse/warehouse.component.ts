import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Validators } from '@angular/forms';
import { Field, FieldType } from 'src/app/lib/dynamic-form.model';
import { WarehouseRepository } from 'src/app/state/warehouse/warehouse.repository';
import { WarehouseService } from 'src/app/state/warehouse/warehouse.service';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.scss']
})
export class WarehouseComponent implements OnInit {
  warehouses$ = this.warehouseStore.warehouses$;
  displayedColumns: string[] = ['id', 'name', 'address', 'city', 'state', 'zip_code', 'phone_number', 'email', 'website'];

  leftForm: Field[] = [
    {
      name: 'firstName',
      placeholder: 'First Name',
      type: FieldType.TEXTFIELD,
      validation: [Validators.required, Validators.maxLength(25)]
    },
    {
      label: 'Last Name',
      name: 'lastName',
      type: FieldType.TEXTFIELD
    },
    {
      name: 'divider',
      type: FieldType.DIVIDER
    },
    {
      name: 'Favorites',
      type: FieldType.SUBHEADER
    },
    {
      name: 'notes',
      placeholder: 'Notes',
      type: FieldType.TEXTAREA
    },
    {
      children: [
        {
          name: 'hiddenName',
          placeholder: 'First Name',
          type: FieldType.TEXTFIELD,
          validation: [Validators.required, Validators.maxLength(25)]
        },
        {
          label: 'Last Name',
          name: 'HiddenLast',
          type: FieldType.TEXTFIELD
        }
      ],
      label: 'Slide',
      name: 'slideToggle',
      type: FieldType.SLIDETOGGLE
    },
    {
      name: 'radio',
      options: ['opt1', 'opt2', 'opt3'],
      type: FieldType.RADIO
    },
    {
      name: 'favoriteFood',
      options: ['Ice Cream', 'Pizza', 'Tacos'],
      placeholder: 'Favorite Food',
      type: FieldType.SELECTDROPDOWN
    },
    {
      label: 'Favorite Color',
      name: 'favoriteColor',
      options: ['Red', 'Blue', 'Yellow'],
      type: FieldType.SELECTDROPDOWN
    }
  ];

  prefillData = [
    {
      key: 'firstName',
      value: 'John'
    },
    {
      key: 'notes',
      value: 'This is a note a really long note that will wrap around to the next line.'
    }
  ];

  constructor(private warehouseStore: WarehouseRepository) { }

  ngOnInit(): void { }

  handleEvent(e) {
    console.log(e);
  }

}
