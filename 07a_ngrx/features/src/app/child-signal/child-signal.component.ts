import { Component, Signal, signal, Output } from '@angular/core';

@Component({
  selector: 'app-child-signal',
  template: `
    <p>Dziecko otrzymało: {{ data() }}</p>
    <input [value]="data()" (input)="onInputChange($event)" />
  `
})
export class ChildSignalComponent {
  data = signal(''); // Zamiast @Input()

  onInputChange(event: Event) {
    this.data.set((event.target as HTMLInputElement).value);
  }
}
