import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-order-list',
  template: `
    <ul>
      <li *ngFor="let order of orders">{{ order.product }}</li>
    </ul>
  `
})
export class OrderListComponent implements OnInit {
  orders: any = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('/api/orders').subscribe(data => {
      this.orders = data;
    });
  }
}