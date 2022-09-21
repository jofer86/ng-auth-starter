import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject: BehaviorSubject<User> | any;
  public user!: Observable<User>;

  constructor(private http: HttpClient, private router: Router) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser') as string));
    this.user = this.userSubject.asObservable();
  }

  userValue(): User {
    return this.userSubject.value;
  }

  login(email: string, password: string) {
    return this.http.post<User>(`${environment.apiUrl}api/v1/auth/login`, { email, password }).pipe(
      map(({ email, token }) => {
        let user: User = { email, token };
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.userSubject.next(user);
        return user;
      })
    );
  }

  getMe(): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}me`);
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.userSubject.next(null);
  }
}
