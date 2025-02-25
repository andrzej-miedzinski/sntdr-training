import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Welcome to {{title}}!</h1>
    <app-button></app-button>
    <app-counter></app-counter>
    
  `,
  styles: []
})
export class AppComponent {
  title = 'reactive_data';
}
