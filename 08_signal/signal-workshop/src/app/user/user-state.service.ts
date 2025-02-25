import { Injectable } from '@angular/core';
import { signal, computed } from '@angular/core';

export interface User {
  name: string;
  age: number;
}

@Injectable({
  providedIn: 'root'
})
export class UserStateService {
  private user = signal<User>({ name: '', age: 0 });

  // Obliczana wartość: pełna informacja o użytkowniku
  userInfo = computed(() => {
    const { name, age } = this.user();
    return `Użytkownik: ${name}, Wiek: ${age}`;
  });

  getUser(): User {
    return this.user();
  }

  updateUser(name: string, age: number): void {
    this.user.update(() => ({ name, age }));
  }
}