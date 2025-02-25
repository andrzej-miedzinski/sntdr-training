import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: string[] = ['John', 'Jane'];

  getUsers() {
    return this.users;
  }

  addUser(name: string) {
    this.users.push(name);
  }
}