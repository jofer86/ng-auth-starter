import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Warehouse } from 'src/app/state/warehouse/warehouse.repository';
import { WarehouseService } from 'src/app/state/warehouse/warehouse.service';

@Injectable({
  providedIn: 'root'
})
export class WarehouseResolver implements Resolve<Warehouse[]> {
  constructor(private warehouseService: WarehouseService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Warehouse[]> {
    return this.warehouseService.getAndStoreWarehouses$();
  }
}
