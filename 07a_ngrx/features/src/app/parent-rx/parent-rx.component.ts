import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-rx',
  template: `
    <app-child [data]="message" (update)="handleUpdate($event)"></app-child>
    <p>Rodzic otrzymał: {{ receivedData }}</p>
  `
})
export class ParentRxComponent {
  message = 'Wiadomość do dziecka';
  receivedData = '';

  handleUpdate(newValue: string) {
    this.receivedData = newValue;
  }
}