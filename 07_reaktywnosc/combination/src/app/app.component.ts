import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Welcome to {{title}}!</h1>
    <app-combined></app-combined>
    
  `,
  styles: []
})
export class AppComponent {
  title = 'combination';
}
