
import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  template: `
    <ul>
      <li *ngFor="let user of users">{{ user.name }} <button (click)="deleteUser(user.id)">Usuń</button></li>
    </ul>
    <button (click)="addUser()">Dodaj użytkownika</button>
  `
})
export class UserListComponent {
  users: any[] | undefined = [];

  constructor(private userService: UserService) {}

  async ngOnInit() {
    this.users = await this.userService.getUsers().toPromise();
  }

  async addUser() {
    const newUser = { name: 'Nowy użytkownik' };
    await this.userService.addUser(newUser).toPromise();
    this.users = await this.userService.getUsers().toPromise();
  }

  async deleteUser(id: number) {
    await this.userService.deleteUser(id).toPromise();
    this.users = await this.userService.getUsers().toPromise();
  }
}