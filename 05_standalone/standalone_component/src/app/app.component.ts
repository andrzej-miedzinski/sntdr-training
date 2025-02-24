import { Component } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { UserListComponent } from './user-list/user-list.component';
import { DateDisplayComponent } from './date-display/date-display.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonComponent, UserListComponent, DateDisplayComponent], // Bezpośrednie importowanie komponentu
  template: `
    <h1>Welcome to {{title}}!</h1>
    <app-button></app-button>
    <app-user-list></app-user-list>
    <app-date-display></app-date-display>
  `,
  styles: [],
})
export class AppComponent {
  title = 'standalone_component';
}
