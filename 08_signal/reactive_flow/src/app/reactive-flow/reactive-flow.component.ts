import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-reactive-flow',
  template: `
    <h2>Reaktywny przepływ danych</h2>
    <label for="numberInput">Wprowadź liczbę:</label>
    <input type="number" 
           id="numberInput" 
           [ngModel]="numberSignal()" 
           (ngModelChange)="updateNumber($event)" />
    <p>Kwadrat liczby: {{ square() }}</p>
  `
})
export class ReactiveFlowComponent {
  // Sygnał przechowujący wartość liczby
  numberSignal = signal<number>(0);

  // Obliczony sygnał zwracający kwadrat liczby
  square = computed(() => this.numberSignal() ** 2);

  // Metoda aktualizująca wartość sygnału
  updateNumber(value: string | number) {
    const parsedValue = typeof value === 'string' ? parseFloat(value) : value;
    this.numberSignal.set(isNaN(parsedValue) ? 0 : parsedValue);
  }
}
