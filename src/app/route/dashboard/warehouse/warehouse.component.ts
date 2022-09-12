import { Component, OnInit } from '@angular/core';
import { WarehouseRepository } from 'src/app/state/warehouse/warehouse.repository';
import { WarehouseService } from 'src/app/state/warehouse/warehouse.service';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.scss']
})
export class WarehouseComponent implements OnInit {
  warehouses$ = this.warehouseStore.warehouses$;
  displayedColumns: string[] = ['id', 'name', 'address', 'city', 'state', 'zip_code', 'phone_number', 'email', 'website'];

  constructor(private warehouseStore: WarehouseRepository) { }

  ngOnInit(): void { }

}
