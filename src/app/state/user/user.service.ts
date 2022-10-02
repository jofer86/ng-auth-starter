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
  getDoc
} from '@angular/fire/firestore';
import { User, UserRepository } from './user.repository';
import { pipe } from 'rxjs';
import { take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersRef: CollectionReference = collection(this.firestore, 'users');
  userRef: DocumentReference;
  constructor(private firestore: Firestore, private userRepository: UserRepository) {}

  async AddUser$(user: User): Promise<any> {
    return await addDoc(this.usersRef, user);
  }

  GetAndStoreUsers$() {
    return collectionData(this.usersRef).pipe(
      tap((users: User[]) => {
        this.userRepository.updateusers(users);
      })
    );
  }

  GetAndStoreUser$(id: string) {
    return docData(doc(this.firestore, `books/${id}`)).pipe(
      tap((user: User) => {
        this.userRepository.updateUser(user);
      })
    );
  }

  UpdateAndStoreUser$(user: User) {
    const userReg = doc(this.firestore, `users/${user.id}`);
  }
}
