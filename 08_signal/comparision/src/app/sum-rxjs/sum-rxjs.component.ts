import { Component } from '@angular/core';
import { BehaviorSubject, combineLatest, map } from 'rxjs';

@Component({
  selector: 'app-sum-rxjs',
  template: `
    <input type="number" [ngModel]="num1$ | async" (ngModelChange)="num1$.next($event)" placeholder="Liczba 1">
    <input type="number" [ngModel]="num2$ | async" (ngModelChange)="num2$.next($event)" placeholder="Liczba 2">
    <p>Suma: {{ total$ | async }}</p>
  `
})
export class SumRxjsComponent {
  num1$ = new BehaviorSubject<number>(0);
  num2$ = new BehaviorSubject<number>(0);

  total$ = combineLatest([this.num1$, this.num2$]).pipe(
    map(([num1, num2]) => num1 + num2)
  );
}