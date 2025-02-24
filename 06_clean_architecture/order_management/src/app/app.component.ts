import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Welcome to {{title}}!</h1>
    <app-order></app-order>
  `,
  styles: []
})
export class AppComponent {
  title = 'order_management';
}
