import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Welcome to {{title}}!</h1>
    <app-button></app-button>
    <app-user-list></app-user-list>
    <app-date-display></app-date-display>
  `,
  styles: []
})
export class AppComponent {
  title = 'module_component';
}
