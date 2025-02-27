import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  login(credentials: { username: string; password: string }): Observable<any> {
    if (credentials.username === 'user' && credentials.password === 'password') {
      return of(); // Symulacja sukcesu
    }
    return of(new Error('Invalid credentials')); // Symulacja błędu
  }
}