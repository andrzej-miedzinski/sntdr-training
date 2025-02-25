import { Component } from '@angular/core';
import { CartStateService, Product } from '../cart-state.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart!: Product[]; // Użyj deklaracji typu z "!"

  constructor(private cartState: CartStateService) {}

  ngOnInit(): void {
    // Inicjalizacja po zakończeniu konstrukcji komponentu
    this.cart = this.cartState.getCart();
  }

  // Getter do dynamicznego pobierania sumy wartości koszyka
  get total(): number {
    return this.cartState.total();
  }

  addToCart(product: Product): void {
    this.cartState.addToCart(product);
  }

  updateQuantity(id: number, quantity: number): void {
    this.cartState.updateQuantity(id, quantity);
  }

  removeFromCart(id: number): void {
    this.cartState.removeFromCart(id);
  }
}