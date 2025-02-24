import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login() {
    console.log('Użytkownik zalogowany.');
  }

  logout() {
    console.log('Użytkownik wylogowany.');
  }
}