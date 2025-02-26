import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { CartModule } from './cart/cart.module';
import { AuthModule } from './auth/auth.module';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './user/user.reducer';
import { cartReducer } from './cart/cart.reducer';
import { authReducer } from './auth/auth.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    CartModule,
    AuthModule,
    StoreModule.forRoot({
      users: userReducer,
      cart: cartReducer,
      auth: authReducer,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
