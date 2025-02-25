import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Welcome to {{title}}!</h1>
    <app-search></app-search>
    <app-results></app-results>
    
  `,
  styles: []
})
export class AppComponent {
  title = 'search';
}
