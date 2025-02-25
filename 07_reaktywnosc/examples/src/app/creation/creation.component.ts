import { Component } from '@angular/core';
import { map, of } from 'rxjs';

@Component({
  selector: 'app-creation',
  template: `
    <button (click)="startStream()">Tworzenie strumieni</button>
  `,
  styles: ``
})
export class CreationComponent {

  startStream() {
    const numbers$ = of(1, 2, 3, 4, 5);
    numbers$.pipe(
      map(value => value * 2)
    ).subscribe(result => console.log(result));
  }
}