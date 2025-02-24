import { Component } from '@angular/core';
import { ReservationService } from '../application/reservation.service';

@Component({
  selector: 'app-reservation',
  template: `
    <h2>Dostępne miejsca:</h2>
    <ul>
      <li *ngFor="let seat of seats">{{ seat.number }}</li>
    </ul>
    <button (click)="reserveSeat()">Zarezerwuj miejsce</button>
  `
})
export class ReservationComponent {
  seats: any[] | undefined = [];

  constructor(private reservationService: ReservationService) {}

  async ngOnInit() {
    this.seats = await this.reservationService.getAvailableSeats();
  }

  async reserveSeat() {
    const seatNumber = 1; // Przykładowy numer miejsca
    await this.reservationService.reserveSeat(seatNumber);
    this.seats = await this.reservationService.getAvailableSeats();
  }
}