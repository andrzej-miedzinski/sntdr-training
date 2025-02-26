import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth',
  template: `
    <form (submit)="onLogin()">
      <input [(ngModel)]="username" name="username" placeholder="Username" />
      <input [(ngModel)]="password" name="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>

    <div *ngIf="authService.error()">Error: {{ authService.error() }}</div>
    <div *ngIf="authService.user()">Logged in as: {{ authService.user().name }}</div>
  `,
})
export class AuthComponent {
  username = '';
  password = '';

  constructor(public authService: AuthService) {}

  onLogin() {
    this.authService.login({ username: this.username, password: this.password });
  }
}