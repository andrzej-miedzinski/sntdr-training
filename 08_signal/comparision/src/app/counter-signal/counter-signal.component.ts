import { Component } from '@angular/core';
import { signal } from '@angular/core';

@Component({
  selector: 'app-counter-signal',
  template: `
    <p>Liczba kliknięć: {{ count() }}</p>
    <button (click)="increment()">Kliknij mnie</button>
  `
})
export class CounterSignalComponent {
  count = signal(0);

  increment() {
    this.count.update(value => value + 1);
  }
}