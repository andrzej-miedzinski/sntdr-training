
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  template: `
    <ul>
      <li *ngFor="let user of userService.users()">{{ user.name }}</li>
    </ul>
  `,
})
export class UserComponent implements OnInit {
  constructor(public userService: UserService) {}

  ngOnInit() {
    this.userService.fetchUsers(); // Pobieranie użytkowników
  }
}