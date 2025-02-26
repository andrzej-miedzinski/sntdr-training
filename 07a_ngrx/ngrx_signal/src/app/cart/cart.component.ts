
import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  template: `
    <button (click)="addToCart()">Add to Cart</button>
    <button (click)="removeFromCart()">Remove from Cart</button>

    <h3>Cart Items:</h3>
    <ul>
      <li *ngFor="let item of cartService.items()">{{ item.name }}</li>
    </ul>
  `,
})
export class CartComponent {
  product = { id: 1, name: 'Laptop' };

  constructor(public cartService: CartService) {}

  addToCart() {
    this.cartService.addToCart(this.product);
  }

  removeFromCart() {
    this.cartService.removeFromCart(this.product.id);
  }
}