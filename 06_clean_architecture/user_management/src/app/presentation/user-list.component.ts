import { Component } from '@angular/core';
import { UserService } from '../application/user.service';


@Component({
  selector: 'app-user-list',
  template: `
    <ul>
      <li *ngFor="let user of users">{{ user.name }} - {{ user.email }}</li>
    </ul>
    <button (click)="addUser()">Dodaj użytkownika</button>
  `
})
export class UserListComponent {
  users: any[] | undefined = [];

  constructor(private userService: UserService) {}

  async ngOnInit() {
    this.users = await this.userService.getUsers();
  }

  async addUser() {
    const newUser = { name: 'Nowy Użytkownik', email: 'new.user@example.com' };
    await this.userService.addUser(newUser);
    this.users = await this.userService.getUsers();
  }
}