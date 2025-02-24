import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  template: `
    <ul>
      <li *ngFor="let product of products">{{ product }}</li>
    </ul>
  `
})
export class ProductListComponent {
  products: string[];

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }
}