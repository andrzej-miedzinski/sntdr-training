
import { Injectable } from '@angular/core';
import { signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items = signal<any[]>([]); // Signal przechowujący produkty w koszyku

  addToCart(product: any) {
    this.items.update((currentItems) => [...currentItems, product]); // Dodanie produktu
  }

  removeFromCart(productId: number) {
    this.items.update((currentItems) =>
      currentItems.filter((item) => item.id !== productId)
    ); // Usunięcie produktu
  }
}