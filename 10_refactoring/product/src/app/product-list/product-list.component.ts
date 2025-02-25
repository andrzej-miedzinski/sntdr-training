// product-list.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  template: `
    <ul>
      <li *ngFor="let product of products">
        {{ product.name }} - {{ product.price > 50 ? 'Expensive' : 'Affordable' }}
      </li>
    </ul>
  `
})
export class ProductListComponent {
  products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 300 },
    { name: 'Book', price: 20 }
  ];
}