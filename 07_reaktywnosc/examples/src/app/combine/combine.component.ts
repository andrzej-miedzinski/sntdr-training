import { Component } from '@angular/core';
import { fromEvent, interval, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-combine',
  template: `
    <button (click)="startStream()">Combine</button>
  `,
  styles: ``
})
export class CombineComponent {
  startStream() {
    const clicks$ = fromEvent<MouseEvent>(document, 'click'); // Explicit type
    const timer$ = interval(1000);
  
    combineLatest([clicks$, timer$]).pipe(
      map(([click, time]) => ({ clickCount: click.detail, time })) // Ensure correct clickCount
    ).subscribe((result: { clickCount: number; time: number }) => console.log(result));
  }
}
