import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  template: `
    <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
      <input formControlName="email" placeholder="Email" />
      <input formControlName="password" type="password" placeholder="Hasło" />
      <button type="submit">Zaloguj</button>
    </form>
    <p *ngIf="errorMessage">{{ errorMessage }}</p>
  `
})
export class LoginFormComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.errorMessage = 'Nieprawidłowe dane.';
      return;
    }
    this.errorMessage = '';
    console.log('Dane logowania:', this.loginForm.value);
  }
}