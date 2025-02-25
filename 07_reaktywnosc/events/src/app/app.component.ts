import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { scan } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="onButtonClick()">Kliknij mnie</button>
    <p>Liczba kliknięć: {{ clickCount$ | async }}</p>
  `
})
export class AppComponent {
  private buttonClicks$ = new Subject<void>();
  clickCount$ = this.buttonClicks$.pipe(
    scan((count) => count + 1, 0) // Akumulacja liczby kliknięć
  );

  onButtonClick() {
    this.buttonClicks$.next(); // Emitowanie zdarzenia kliknięcia
  }
}