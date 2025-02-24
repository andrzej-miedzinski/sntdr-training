import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { OrderComponent } from './presentation/order.component';
import { ORDER_REPOSITORY } from './domain/order.repository';
import { OrderHttpRepository } from './infrastructure/order-http.repository';
import { OrderService } from './application/order.service';

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    OrderService,
    { provide: ORDER_REPOSITORY, useClass: OrderHttpRepository }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
