import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@app/services/auth.service';
import { FieldType } from '@lib/dynamic-form.model';
import { first } from 'rxjs/operators';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup = {} as FormGroup;
  loginForm = [
    {
      placeholder: 'Email',
      name: 'email',
      type: FieldType.TEXTFIELD
    },
    {
      placeholder: 'Password',
      name: 'password',
      type: FieldType.PASSWORD
    }
  ];

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(obj: any) {
    let formObject = { email: '', password: '' };

    for (let { key, value } of obj) {
      formObject[key] = value;
    }

    let { email, password } = formObject;
    this.authService
      .login(email, password)
      .pipe(first())
      .subscribe({
        next: () => {
          this.router.navigate(['dashboard']);
        },
        error: (error) => {
          console.log(error);
        }
      });
  }
}
