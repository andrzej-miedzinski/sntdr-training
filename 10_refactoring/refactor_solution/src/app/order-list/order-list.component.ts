import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-list',
  template: `
    <ul>
      <li *ngFor="let order of orders">{{ order.product }}</li>
    </ul>
  `
})
export class OrderListComponent implements OnInit {
  orders: any[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.orderService.getOrders().subscribe(data => {
      this.orders = data;
    });
  }
}