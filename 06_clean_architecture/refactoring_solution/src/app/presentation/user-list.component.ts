import { Component } from '@angular/core';
import { UserService } from '../application/user.service';

@Component({
  selector: 'app-user-list',
  template: `
    <ul>
      <li *ngFor="let user of users">{{ user.name }} - {{ user.email }}</li>
    </ul>
  `
})
export class UserListComponent {
  users: any[] | undefined = [];

  constructor(private userService: UserService) {}

  async ngOnInit() {
    this.users = await this.userService.getUsers();
  }
}