import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  addToCart(product: any): Observable<any> {
    console.log('Product added to cart:', product);
    return of(product); // Symuluje dodanie produktu
  }

  removeFromCart(productId: number): Observable<any> {
    console.log('Product removed from cart:', productId);
    return of(productId); // Symuluje usunięcie produktu
  }
}