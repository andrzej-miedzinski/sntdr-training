import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Welcome to {{title}}!</h1>
    <app-counter></app-counter>
    <app-sum></app-sum>
    <app-logger></app-logger>
    
  `,
  styles: []
})
export class AppComponent {
  title = 'basic_signal';
}
