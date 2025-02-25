import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Welcome to {{title}}!</h1>
    <app-creation></app-creation>
    <app-filter></app-filter>
    <app-dom></app-dom>
    <app-merge></app-merge>
    <app-limiter></app-limiter>
    <app-errors></app-errors>
    <app-combine></app-combine>
  `,
  styles: []
})
export class AppComponent {
  title = 'examples';
}
