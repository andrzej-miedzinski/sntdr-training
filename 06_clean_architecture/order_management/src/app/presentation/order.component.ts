import { Component } from '@angular/core';
import { OrderService } from '../application/order.service';

@Component({
  selector: 'app-order',
  template: `
    <h2>Historia zamówień:</h2>
    <ul>
      <li *ngFor="let order of orders">{{ order.product }} - {{ order.quantity }}</li>
    </ul>
    <button (click)="createOrder()">Utwórz zamówienie</button>
  `
})
export class OrderComponent {
  orders: any[] | undefined = [];

  constructor(private orderService: OrderService) {}

  async ngOnInit() {
    this.orders = await this.orderService.getOrders();
  }

  async createOrder() {
    const newOrder = { product: 'Produkt A', quantity: 1 };
    await this.orderService.createOrder(newOrder);
    this.orders = await this.orderService.getOrders();
  }
}