import { Component } from '@angular/core';
import { signal, effect } from '@angular/core';

@Component({
  selector: 'app-logger',
  template: `
    <input type="text" [(ngModel)]="text" placeholder="Wpisz coś">
  `
})
export class LoggerComponent {
  text = signal('');

  constructor() {
    effect(() => {
      console.log('Nowa wartość:', this.text()); // Efekt uruchamia się za każdym razem, gdy zmienia się wartość sygnału
    });
  }
}