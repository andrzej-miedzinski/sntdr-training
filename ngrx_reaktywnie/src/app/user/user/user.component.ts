import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadUsers } from '../user.actions';
import { selectUsers, selectError } from '../user.selectors';

@Component({
  selector: 'app-user',
  template: `
    <ul>
      <li *ngFor="let user of users$ | async">{{ user.name }}</li>
    </ul>
    <div *ngIf="error$ | async">Error: {{ error$ | async }}</div>
  `,
})
export class UserComponent implements OnInit {
  users$: Observable<any[]> | undefined;
  error$: Observable<any> | undefined;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(loadUsers());
    this.users$ = this.store.select(selectUsers); // Używamy selektora do pobrania użytkowników
    this.error$ = this.store.select(selectError); // Używamy selektora do pobrania błędu
  }
}