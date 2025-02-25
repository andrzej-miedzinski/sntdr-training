import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  validateOrder(order: any): boolean {
    if (!order.product || order.product.length < 3) {
      return false;
    }
    return true;
  }
}
