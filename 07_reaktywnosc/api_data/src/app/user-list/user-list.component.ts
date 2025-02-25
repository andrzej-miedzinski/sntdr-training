import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-list',
  template: `
    <ul>
      <li *ngFor="let user of users$ | async">{{ user.fullName }}</li>
    </ul>
  `
})
export class UserListComponent {
  users$ : Observable<any[]>;
  

  constructor(private userService: UserService) {
    this.users$ = this.userService.getUsers();
  }
}