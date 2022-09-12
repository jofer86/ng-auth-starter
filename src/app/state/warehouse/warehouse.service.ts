import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { first, tap } from 'rxjs/operators';
import { Warehouse, WarehouseRepository } from './warehouse.repository';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  constructor(private warehouseStore: WarehouseRepository, private http: HttpClient) { }

  getAndStoreWarehouses$(): Observable<Warehouse[]> {
    let url = 'http://localhost:3333/api/v1/warehouses';
    return this.http.get<Warehouse[]>(url).pipe(
      tap((warehouses) => {
        this.warehouseStore.updateWarehouses(warehouses);
      })
    )
  }
}
