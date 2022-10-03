import { Injectable } from '@angular/core';
import { createStore, withProps, select } from '@ngneat/elf';

export interface Month {
  id?: string;
  name: string;
  total_expenses: number;
  total_income: number;
  userId: string;
}

interface MonthProps {
  months: Month[] | null;
  month: Month | null;
}

const monthStore = createStore({ name: 'months' }, withProps<MonthProps>({ months: [], month: null }));

@Injectable({
  providedIn: 'root'
})
export class MonthRepository {
  months$ = monthStore.pipe(select((state) => state.months));
  month$ = monthStore.pipe(select((state) => state.month));

  updateMonths(months: MonthProps['months']) {
    monthStore.update((state) => ({
      ...state,
      months
    }));
  }

  updateMonth(month: MonthProps['month']) {
    monthStore.update((state) => ({
      ...state,
      month
    }));
  }
}
