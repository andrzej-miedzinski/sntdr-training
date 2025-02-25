import { Component } from '@angular/core';
import { filter, interval, of, take } from 'rxjs';

@Component({
  selector: 'app-limiter',
  template: `
    <button (click)="startStream()">Ograniczanie danych</button>
  `,
  styles: ``
})
export class LimiterComponent {
  startStream() {
    const numbers$ = interval(1000);

    numbers$.pipe(
      take(3)
    ).subscribe(value => console.log(value));
  }
}
