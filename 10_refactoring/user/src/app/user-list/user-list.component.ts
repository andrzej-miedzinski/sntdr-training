import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  template: `
    <ul>
      <li *ngFor="let user of users">
        {{ user.name }} ({{ user.age > 18 ? 'Adult' : 'Minor' }})
      </li>
    </ul>
  `
})
export class UserListComponent {
  users = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 17 }
  ];
}