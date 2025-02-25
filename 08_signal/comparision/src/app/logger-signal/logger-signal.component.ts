import { Component } from '@angular/core';
import { signal, effect } from '@angular/core';

@Component({
  selector: 'app-logger-signal',
  template: `
    <input type="text" [(ngModel)]="text" placeholder="Wpisz coś">
  `
})
export class LoggerSignalComponent {
  text = signal('');

  constructor() {
    effect(() => {
      console.log('Nowa wartość:', this.text());
    });
  }
}