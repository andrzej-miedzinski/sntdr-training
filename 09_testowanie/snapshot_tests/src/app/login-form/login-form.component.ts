import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  template: `
    <form [formGroup]="loginForm">
      <input formControlName="email" placeholder="Email" />
      <input formControlName="password" type="password" placeholder="Hasło" />
      <button type="submit">Zaloguj</button>
    </form>
  `
})
export class LoginFormComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    });
  }
}