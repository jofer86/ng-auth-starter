// import { Injectable } from '@angular/core';
// import { Router, CanActivate } from '@angular/router';
// import { first, Observable, pipe } from 'rxjs';
// import { AuthService } from './auth.service';

// @Injectable()
// export class AuthGuardService implements CanActivate {
//   constructor(public auth: AuthService, public router: Router) {}
//   canActivate(): boolean {
//     let currentUser = localStorage.getItem('currentUser');
//     if (currentUser) return true;
//     this.router.navigate(['login']);
//     return false;
//   }
// }
