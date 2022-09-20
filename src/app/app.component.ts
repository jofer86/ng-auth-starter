import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { pipe } from 'rxjs';
import { first } from 'rxjs/operators';
import { AuthService } from './services/auth.service';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'client';
  constructor(private authService: AuthService) {}

  ngOnInit() {

  }

  checkMe(): void {
    this.authService.getMe()
      .pipe(first())
      .subscribe((user) => {
        console.log(user);
      });
  }

  logout(): void {
    this.authService.logout();
  }

}
