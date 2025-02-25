import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-logger-rxjs',
  template: `
    <input type="text" (input)="onInput($event)" placeholder="Wpisz coś">
  `
})
export class LoggerRxjsComponent {
  private textSubject = new Subject<string>();

  constructor() {
    this.textSubject.subscribe(value => {
      console.log('Nowa wartość:', value);
    });
  }

  onInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement) {
      this.textSubject.next(inputElement.value);
    }
  }
}
