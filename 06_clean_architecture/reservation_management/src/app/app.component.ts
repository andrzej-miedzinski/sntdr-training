import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Welcome to {{title}}!</h1>

    <app-reservation></app-reservation>
  `,
  styles: []
})
export class AppComponent {
  title = 'reservation_management';
}
