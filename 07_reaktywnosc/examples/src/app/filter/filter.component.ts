import { Component } from '@angular/core';
import { filter, of } from 'rxjs';

@Component({
  selector: 'app-filter',
  template: `
    <button (click)="startStream()">Filtrowanie strumieni</button>
  `,
  styles: ``
})
export class FilterComponent {
  startStream() {
    const numbers$ = of(1, 2, 3, 4, 5);
    numbers$.pipe(
      filter(value => value > 3)
    ).subscribe(result => console.log(result));
  }
}