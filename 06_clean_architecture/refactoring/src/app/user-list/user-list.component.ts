import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) {}

  async ngOnInit() {
    this.users = await this.http.get<any[]>('https://api.example.com/users').toPromise();
  }
}