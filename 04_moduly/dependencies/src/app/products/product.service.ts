import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'any'
})
export class ProductService {
  getProducts() {
    return ['Produkt 1', 'Produkt 2', 'Produkt 3'];
  }
}