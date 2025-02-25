import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Welcome to {{title}}!</h1>
    <app-counter-signal></app-counter-signal>
    <app-counter-rxjs></app-counter-rxjs>
    <app-sum-signal></app-sum-signal>
    <app-sum-rxjs></app-sum-rxjs>
    <app-logger-signal></app-logger-signal>
    <app-logger-rxjs></app-logger-rxjs>
    
  `,
  styles: []
})
export class AppComponent {
  title = 'comparision';
}
