import { Injectable } from '@angular/core';
import { createStore, withProps, select } from '@ngneat/elf';

export interface User {
  id?: string;
  name: string;
  email: string;
}

interface UserProps {
  users: User[] | null;
  user: User | null;
}

const userStore = createStore({ name: 'users' }, withProps<UserProps>({ users: [], user: null }));

@Injectable({
  providedIn: 'root'
})
export class UserRepository {
  users$ = userStore.pipe(select((state) => state.users));
  user$ = userStore.pipe(select((state) => state.user));

  updateusers(users: UserProps['users']) {
    userStore.update((state) => ({
      ...state,
      users
    }));
  }

  updateUser(user: UserProps['user']) {
    userStore.update((state) => ({
      ...state,
      user
    }));
  }
}
