import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addToCart, removeFromCart } from '../cart.actions';
import { Observable } from 'rxjs';
import { selectCartItems, selectCartTotal } from '../cart.selectors';

@Component({
  selector: 'app-cart',
  template: `
    <button (click)="addToCart()">Add to Cart</button>
    <button (click)="removeFromCart()">Remove from Cart</button>

    <h3>Cart Items:</h3>
    <ul>
      <li *ngFor="let item of cartItems$ | async">{{ item.name }} - {{ item.price }}</li>
    </ul>

    <h4>Total: {{ cartTotal$ | async }}</h4>
  `,
})
export class CartComponent {
  product = { id: 1, name: 'Laptop', price: 1000 };

  cartItems$: Observable<any[]>;
  cartTotal$: Observable<number>;

  constructor(private store: Store) {
    this.cartItems$ = this.store.select(selectCartItems); // Używamy selektora do pobrania produktów
    this.cartTotal$ = this.store.select(selectCartTotal); // Używamy selektora do obliczenia wartości
  }

  addToCart() {
    this.store.dispatch(addToCart({ product: this.product }));
  }

  removeFromCart() {
    this.store.dispatch(removeFromCart({ productId: this.product.id }));
  }
}