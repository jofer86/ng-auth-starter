import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Example form implementation
    // leftForm: Field[] = [
    //   {
    //     name: 'name',
    //     placeholder: 'Name',
    //     type: FieldType.TEXTFIELD
    //   },
    //   {
    //     name: 'address',
    //     placeholder: 'Address',
    //     type: FieldType.TEXTAREA
    //   },
    //   {
    //     name: 'city',
    //     placeholder: 'City',
    //     type: FieldType.TEXTFIELD
    //   },
    //   {
    //     name: 'state',
    //     placeholder: 'State',
    //     type: FieldType.TEXTFIELD
    //   },
    //   {
    //     name: 'zip_code',
    //     placeholder: 'Zip Code',
    //     type: FieldType.TEXTFIELD
    //   },
    //   {
    //     name: 'country',
    //     placeholder: 'Country',
    //     type: FieldType.TEXTFIELD
    //   },
    //   {
    //     name: 'phone_number',
    //     placeholder: 'Phone Number',
    //     type: FieldType.TEXTFIELD
    //   },
    //   {
    //     name: 'email',
    //     placeholder: 'Email',
    //     type: FieldType.TEXTFIELD
    //   }
    // ]

    // prefillData = [
    //   {
    //     key: 'firstName',
    //     value: 'John'
    //   },
    //   {
    //     key: 'notes',
    //     value: 'This is a note a really long note that will wrap around to the next line.'
    //   }
    // ];

    // constructor(private warehouseStore: WarehouseRepository) { }

    // ngOnInit(): void { }

    // handleEvent(e) {
    //   console.log(e);
    // }
  }

}
