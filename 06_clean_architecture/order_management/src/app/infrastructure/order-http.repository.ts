import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderRepository } from '../domain/order.repository';


@Injectable({
  providedIn: 'root'
})
export class OrderHttpRepository implements OrderRepository {
  private apiUrl = 'https://api.example.com/orders';

  constructor(private http: HttpClient) {}

  async getOrders() {
    return this.http.get<any[]>(this.apiUrl).toPromise();
  }

  async createOrder(order: { product: string; quantity: number }) {
    return this.http.post(this.apiUrl, order).toPromise();
  }
}