import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let user = this.authService.userValue();
    console.log(user);
    if (user && user.token) {
      req = req.clone({ headers: req.headers.set('Authorization', `Bearer ${user.token.token}`) });
    }

    return next.handle(req);
  }
  constructor(private authService: AuthService, private router: Router) {}
}
