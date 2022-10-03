import { Injectable } from '@angular/core';
import {
  collection,
  collectionData,
  doc,
  docData,
  Firestore,
  CollectionReference,
  DocumentReference,
  addDoc,
  deleteDoc,
  updateDoc,
  getDoc,
  setDoc
} from '@angular/fire/firestore';
import { Month, MonthRepository } from './month.repository';
import { pipe } from 'rxjs';
import { take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MonthService {
  monthsRef: CollectionReference = collection(this.firestore, 'months');
  monthRef: DocumentReference;
  constructor(private firestore: Firestore, private monthRepository: MonthRepository) {}

  async AddMonth$(month: Month): Promise<any> {
    return await addDoc(this.monthsRef, month);
  }

  GetAndStoreMonths$() {
    return collectionData(this.monthsRef).pipe(
      tap((months: Month[]) => {
        this.monthRepository.updateMonths(months);
      })
    );
  }

  GetAndStoreMonth$(id: string) {
    return docData(doc(this.firestore, `month/${id}`)).pipe(
      tap((month: Month) => {
        this.monthRepository.updateMonth(month);
      })
    );
  }

  async UpdateAndStoreMonth$(month: Month) {
    const monthRef = doc(this.firestore, `months/${month.id}`);
    return setDoc(monthRef, month).then(() => {
      this.monthRepository.updateMonth(month);
    });
  }

  DeleteMonth(id: string) {
    const monthRef = doc(this.firestore, `months/${id}`);
    return deleteDoc(monthRef);
  }

  ModifyTotalIncome(month: Month, amount: number) {
    const monthRef = doc(this.firestore, `months/${month.id}`);
    return updateDoc(monthRef, { total_income: month.total_income + amount });
  }
}
