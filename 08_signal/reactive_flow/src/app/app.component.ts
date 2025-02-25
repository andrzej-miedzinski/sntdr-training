import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Welcome to {{title}}!</h1>
    <app-reactive-flow></app-reactive-flow>
    
  `,
  styles: []
})
export class AppComponent {
  title = 'reactive_flow';
}
