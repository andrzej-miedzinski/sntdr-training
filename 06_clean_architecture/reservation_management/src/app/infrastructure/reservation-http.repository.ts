import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservationHttpRepository implements ReservationHttpRepository {
  private apiUrl = 'https://api.example.com/reservations';

  constructor(private http: HttpClient) {}

  async getAvailableSeats() {
    return this.http.get<number[]>(`${this.apiUrl}/available`).toPromise();
  }

  async reserveSeat(seatNumber: number) {
    return this.http.post(`${this.apiUrl}/reserve`, { seatNumber }).toPromise();
  }
}