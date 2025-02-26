import { Injectable } from '@angular/core';
import { signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = signal<any | null>(null); // Signal przechowujący zalogowanego użytkownika
  error = signal<string | null>(null); // Signal przechowujący błąd logowania

  constructor(private http: HttpClient) {}

  login(credentials: { username: string; password: string }) {
    this.http.post<any>('https://api.example.com/login', credentials).subscribe(
      (user) => {
        this.user.set(user); // Ustawienie użytkownika po pomyślnym logowaniu
        this.error.set(null); // Resetowanie błędu
      },
      (error) => {
        this.error.set(error.message); // Ustawienie błędu
        this.user.set(null); // Resetowanie użytkownika
      }
    );
  }
}