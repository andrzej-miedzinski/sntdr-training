import { InjectionToken } from '@angular/core';
import { Order } from './reservation.entity';

export interface ReservationRepository {
  getAvailableSeats(): Promise<any[] | undefined>;  
  reserveSeat(seatNumber: number): Promise<any>;
}

export { Order };

export const RESERVATION_REPOSITORY = new InjectionToken<ReservationRepository>('ReservationRepository');