import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-counter-rxjs',
  template: `
    <p>Liczba kliknięć: {{ count$ | async }}</p>
    <button (click)="increment()">Kliknij mnie</button>
  `
})
export class CounterRxjsComponent {
  count$ = new BehaviorSubject<number>(0);

  increment() {
    this.count$.next(this.count$.value + 1);
  }
}