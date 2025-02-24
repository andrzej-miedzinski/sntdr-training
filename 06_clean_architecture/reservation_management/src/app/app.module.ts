import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReservationComponent } from './presentation/reservation.component';
import { RESERVATION_REPOSITORY } from './domain/reservation.repository';
import { ReservationHttpRepository } from './infrastructure/reservation-http.repository';
import { ReservationService } from './application/reservation.service';

@NgModule({
  declarations: [
    AppComponent,
    ReservationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ReservationService,
    { provide: RESERVATION_REPOSITORY, useClass: ReservationHttpRepository }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
