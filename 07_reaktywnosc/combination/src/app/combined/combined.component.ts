import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';

@Component({
  selector: 'app-combined',
  template: `
    <button (click)="startStream()">Rozpocznij</button>
    <ul>
      <li *ngFor="let item of items">{{ item }}</li>
    </ul>
  `
})
export class CombinedComponent {
  items: number[] = [];

  startStream() {
    interval(1000).pipe(
      take(5), // Pobiera tylko 5 wartości
      map(value => value * 2) // Mnoży każdą wartość przez 2
    ).subscribe(item => this.items.push(item));
  }
}