import { Injectable } from '@angular/core';
import { signal, computed, effect } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartStateService {
  private cart = signal<Product[]>([]);

  // Obliczana wartość: suma wartości koszyka
  total = computed(() => {
    return this.cart().reduce((sum, product) => sum + product.price * product.quantity, 0);
  });

  // Efekt: Logowanie zmian w koszyku
  constructor() {
    effect(() => {
      console.log('Aktualny koszyk:', this.cart());
    });
  }

  getCart(): Product[] {
    return this.cart();
  }

  addToCart(product: Product): void {
    const existingProduct = this.cart().find(p => p.id === product.id);
    if (existingProduct) {
      this.updateQuantity(existingProduct.id, existingProduct.quantity + 1);
    } else {
      this.cart.update(cart => [...cart, { ...product, quantity: 1 }]);
    }
  }

  updateQuantity(id: number, quantity: number): void {
    this.cart.update(cart =>
      cart.map(product =>
        product.id === id ? { ...product, quantity } : product
      )
    );
  }

  removeFromCart(id: number): void {
    this.cart.update(cart => cart.filter(product => product.id !== id));
  }
}