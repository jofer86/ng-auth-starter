import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@env/environment';
import { BehaviorSubject, first, map, Observable, pipe } from 'rxjs';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject: BehaviorSubject<User> | any;
  private tokenSubject: BehaviorSubject<string> | any;
  public user: Observable<User>;
  public token: Observable<string>;

  constructor(private http: HttpClient, private router: Router) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser') as string));
    this.tokenSubject = new BehaviorSubject<string>(JSON.parse(localStorage.getItem('token') as string));
    this.user = this.userSubject.asObservable();
    this.token = this.tokenSubject.asObservable();
  }

  public isAuthenticated$: Observable<User> = this.http.get<User>(`${environment.apiUrl}me`).pipe(first());

  userValue(): User {
    return this.userSubject.value;
  }

  login(email: string, password: string) {
    return this.http.post<User>(`${environment.apiUrl}api/v1/auth/login`, { email, password }).pipe(
      map(({ token }) => {
        let user: User = { email, token };
        localStorage.setItem('currentUser', JSON.stringify(user));
        localStorage.setItem('token', JSON.stringify(token.token));
        this.userSubject.next(user);
        this.tokenSubject.next(token.token);
        return user;
      })
    );
  }

  getMe(): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}me`);
  }

  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    this.userSubject.next(null);
    this.tokenSubject.next(null);
    this.router.navigate(['/login']);
  }
}
