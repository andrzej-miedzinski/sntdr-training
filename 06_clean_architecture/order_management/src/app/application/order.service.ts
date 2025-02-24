import { Inject, Injectable } from '@angular/core';
import { ORDER_REPOSITORY, OrderRepository } from '../domain/order.repository';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(@Inject(ORDER_REPOSITORY) private orderRepository: OrderRepository) {}

  async getOrders() {
    return this.orderRepository.getOrders();
  }

  async createOrder(order: { product: string; quantity: number }) {
    if (order.quantity <= 0) {
      throw new Error('Ilość musi być większa niż zero.');
    }
    await this.orderRepository.createOrder(order);
  }
}