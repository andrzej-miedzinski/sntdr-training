import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <div>
      <h2>Users</h2>
      <ul>
        <li *ngFor="let user of users">{{ user.name }}</li>
      </ul>

      <h2>Products</h2>
      <ul>
        <li *ngFor="let product of products">{{ product.name }}</li>
      </ul>
    </div>
  `
})
export class DashboardComponent {
  users = [{ name: 'John' }, { name: 'Jane' }];
  products = [{ name: 'Laptop' }, { name: 'Phone' }];
}