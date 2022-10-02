import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FieldType } from '@lib/dynamic-form.model';
import { UserService } from '@state/user/user.service';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  userForm = [
    {
      placeholder: 'Email',
      name: 'email',
      type: FieldType.TEXTFIELD
    },
    {
      placeholder: 'Password',
      name: 'password',
      type: FieldType.TEXTFIELD
    }
  ];
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(form: any): void {
    let { formObject, formValues } = form;
    console.log(form);
    this.userService.AddUser$(formObject).then(() => this.router.navigate(['/']));
  }
}
