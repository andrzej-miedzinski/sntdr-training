import { Inject, Injectable } from '@angular/core';
import { RESERVATION_REPOSITORY, ReservationRepository } from '../domain/reservation.repository';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  constructor(@Inject(RESERVATION_REPOSITORY) private reservationRepository: ReservationRepository) {}

  async getAvailableSeats() {
    return this.reservationRepository.getAvailableSeats();
  }

  async reserveSeat(seatNumber: number) {
    const availableSeats = await this.reservationRepository.getAvailableSeats() || [];
    if (!availableSeats.includes(seatNumber)) {
      throw new Error('Miejsce jest już zajęte.');
    }
    await this.reservationRepository.reserveSeat(seatNumber);
  }
}