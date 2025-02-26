import { Injectable } from '@angular/core';
import { signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users = signal<any[]>([]); // Signal przechowujący listę użytkowników

  constructor(private http: HttpClient) {}

  fetchUsers() {
    this.http.get<any[]>('https://api.example.com/users').subscribe((users) => {
      this.users.set(users); // Aktualizacja Signalu po pobraniu danych
    });
  }
}