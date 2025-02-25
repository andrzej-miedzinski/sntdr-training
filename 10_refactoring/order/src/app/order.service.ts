import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private http: HttpClient) {}

  getOrders() {
    return this.http.get('/api/orders').pipe(
      catchError(error => {
        console.error('Error fetching orders:', error);
        return throwError(() => new Error(error));
      })
    );
  }

  addOrder(order: any) {
    return this.http.post('/api/orders', order).pipe(
      catchError(error => {
        console.error('Error adding order:', error);
        return throwError(() => new Error(error));
      })
    );
  }
}
