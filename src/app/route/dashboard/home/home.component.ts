import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
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
import { FieldType } from '@lib/dynamic-form.model';
import { UserService } from '@state/user/user.service';
import { Router } from '@angular/router';
import { UserRepository } from '@state/user/user.repository';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  itemsRef: CollectionReference<any>;
  itemRef: DocumentReference<any>;

  constructor(
    firestore: Firestore,
    private userService: UserService,
    private router: Router,
    private userRepository: UserRepository
  ) {
    this.itemsRef = collection(firestore, 'items');
    collectionData(this.itemsRef).subscribe(console.log);

    this.itemRef = doc(firestore, 'items/505NSR9mm4Brs18M8hnt');
    docData(this.itemRef).subscribe(console.log);
  }

  ngOnInit(): void {}

  onSubmit(event: any) {
    let { formObject } = event;

    this.userService.AddUser$(formObject).then(() => this.router.navigate(['/']));
  }
}
