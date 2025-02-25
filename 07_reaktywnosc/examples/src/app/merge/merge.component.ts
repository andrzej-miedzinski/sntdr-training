import { Component } from '@angular/core';
import { fromEvent, mergeMap } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-merge',
  template: `
    <button (click)="startStream()">Laczenie strumieni</button>
  `,
  styles: ``
})
export class MergeComponent {
  startStream() {
    const button = document.querySelector('button') as HTMLButtonElement | null;
  
    if (!button) {
      console.error("Button not found");
      return;
    }
  
    fromEvent(button, 'click').pipe(
      mergeMap(() => ajax.getJSON('https://api.example.com/user'))
    ).subscribe(user => console.log(user));
  }
  
}