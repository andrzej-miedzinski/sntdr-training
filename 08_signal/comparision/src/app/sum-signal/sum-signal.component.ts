import { Component } from '@angular/core';
import { signal, computed } from '@angular/core';

@Component({
  selector: 'app-sum-signal',
  template: `
    <input type="number" [(ngModel)]="num1" placeholder="Liczba 1">
    <input type="number" [(ngModel)]="num2" placeholder="Liczba 2">
    <p>Suma: {{ total() }}</p>
  `
})
export class SumSignalComponent {
  num1 = signal(0);
  num2 = signal(0);

  total = computed(() => this.num1() + this.num2());
}