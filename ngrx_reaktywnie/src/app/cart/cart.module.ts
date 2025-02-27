import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { FormsModule } from '@angular/forms';
import { cartReducer } from './cart.reducer';
import { StoreModule } from '@ngrx/store';


@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('cart', cartReducer),
  ],
  exports: [CartComponent]
})
export class CartModule { }
