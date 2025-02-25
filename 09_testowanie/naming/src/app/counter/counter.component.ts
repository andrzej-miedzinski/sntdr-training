import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>Liczba kliknięć: {{ count }}</p>
    <button (click)="increment()">Kliknij mnie</button>
  `
})
export class CounterComponent {
  count = 0;

  increment() {
    this.count++;
  }
}