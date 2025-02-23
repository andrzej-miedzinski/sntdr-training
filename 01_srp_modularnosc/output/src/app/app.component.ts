import { Component } from '@angular/core';
import { ButtonComponent } from './button/button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <h1>Welcome to {{title}}!</h1>
    <app-button 
      [label]="'Zaloguj się'" 
      [color]="'#28a745'" 
      (clicked)="onLogin()">
    </app-button>

    <app-button 
      [label]="'Zarejestruj się'" 
      [color]="'#17a2b8'" 
      (clicked)="onRegister()">
    </app-button>
    
  `,
  styles: [],
})
export class AppComponent {
  title = 'output';

  onLogin() {
    console.log('Użytkownik chce się zalogować.');
  }

  onRegister() {
    console.log('Użytkownik chce się zarejestrować.');
  }
}
