import { Component } from '@angular/core';
import { fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-dom',
  template: `
    <button (click)="startStream()">Obsluga zdarzen DOM</button>
  `,
  styles: ``
})
export class DOMComponent {
  startStream() {
    const button = document.querySelector('button');
  
    fromEvent<MouseEvent>(button!, 'click').pipe(
      map((event) => ({ x: event.clientX, y: event.clientY }))
    ).subscribe(coords => console.log(coords));
  }
}
