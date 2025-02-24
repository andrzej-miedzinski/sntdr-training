import { InjectionToken } from '@angular/core';
import { Order } from './order.entity';

export interface OrderRepository {
  getOrders(): Promise<any[] | undefined>;  
  createOrder(order: { product: string; quantity: number }): Promise<any>;
}

export { Order };

export const ORDER_REPOSITORY = new InjectionToken<OrderRepository>('OrderRepository');