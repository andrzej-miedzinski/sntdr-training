import { Component } from '@angular/core';

@Component({
  selector: 'app-order-form',
  template: `
    <form (submit)="placeOrder()">
      <input [(ngModel)]="order.product" placeholder="Product" />
      <button type="submit">Place Order</button>
    </form>
    <p *ngIf="errorMessage">{{ errorMessage }}</p>
  `
})
export class OrderFormComponent {
  order = { product: '' };
  errorMessage = '';

  placeOrder() {
    if (!this.order.product || this.order.product.length < 3) {
      this.errorMessage = 'Product name must be at least 3 characters long.';
      return;
    }
    console.log('Order placed:', this.order);
  }
}