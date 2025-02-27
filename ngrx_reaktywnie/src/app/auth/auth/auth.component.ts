import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { login } from '../auth.actions';
import { selectIsLoggedIn, selectLoginError } from '../auth.selectors'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth',
  template: `
    <form (submit)="onLogin()">
      <input [(ngModel)]="username" name="username" placeholder="Username" />
      <input [(ngModel)]="password" name="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>

    <div *ngIf="isLoggedIn$ | async">Logged in!</div>
    <div *ngIf="error$ | async">Error: {{ error$ | async }}</div>
  `,
})
export class AuthComponent {
  username = '';
  password = '';

  isLoggedIn$: Observable<boolean>;
  error$: Observable<string | null>;

  constructor(private store: Store) {
    this.isLoggedIn$ = this.store.select(selectIsLoggedIn); // Używamy selektora do sprawdzenia logowania
    this.error$ = this.store.select(selectLoginError); // Używamy selektora do pobrania błędu
  }

  onLogin() {
    this.store.dispatch(login({ credentials: { username: this.username, password: this.password } }));
  }
}