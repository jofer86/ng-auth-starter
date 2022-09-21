import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder } from '@angular/forms';
import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { AuthService } from 'src/app/services/auth.service';
import { DynamicFormModule } from '../../lib/dymanic-form.module'

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let spectator: Spectator<LoginComponent>;
  const createComponent = createComponentFactory({
    component: LoginComponent,
    imports: [DynamicFormModule, HttpClientTestingModule],
    providers: [FormBuilder]
  });

  beforeEach(() => spectator = createComponent());

  it('should have a success class by default', () => {
    
  });
});
