import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Welcome to {{title}}!</h1>
    <app-user></app-user>
    
  `,
  styles: []
})
export class AppComponent {
  title = 'ca_ddd';
}
