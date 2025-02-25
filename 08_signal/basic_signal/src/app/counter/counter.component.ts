import { Component } from '@angular/core';
import { signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>Liczba kliknięć: {{ count() }}</p>
    <button (click)="increment()">Kliknij mnie</button>
  `
})
export class CounterComponent {
  count = signal(0); // Tworzymy sygnał z początkową wartością 0

  increment() {
    this.count.update(value => value + 1); // Aktualizujemy wartość sygnału
  }
}