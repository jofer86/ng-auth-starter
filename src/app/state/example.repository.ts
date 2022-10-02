import { Injectable } from '@angular/core';
import { createStore, withProps, select } from '@ngneat/elf';


export interface Warehouse {
  id: string,
  name: string,
  address: string,
  city: string,
  state: string,
  zip_code: string,
  phone_number: string,
  email: string,
  website?: string
}

interface WarehouseProps {
  warehouses: Warehouse[] | null;
  warehouse: Warehouse | null;
}

const warehouseStore = createStore(
  { name: 'warehouses' },
  withProps<WarehouseProps>({ warehouses: [], warehouse: null })
);

@Injectable({
  providedIn: 'root'
})
export class WarehouseRepository {
  warehouses$ = warehouseStore.pipe(select((state) => state.warehouses));
  warehouse$ = warehouseStore.pipe(select((state) => state.warehouse));

  updateWarehouses(warehouses: WarehouseProps['warehouses']) {
    warehouseStore.update((state) => ({
      ...state,
      warehouses,
    }));
  }

  updateWarehouse(warehouse: WarehouseProps['warehouse']) {
    warehouseStore.update((state) => ({
      ...state,
      warehouse,
    }));
  }
}

