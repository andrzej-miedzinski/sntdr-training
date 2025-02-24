import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ButtonComponent } from './button/button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <h1>Welcome to {{title}}!</h1>

    <app-button></app-button>

    <my-button [attr.label]="'Nowy tekst'" [attr.color]="'red'"></my-button>
    
  `,
  styles: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'angular_components';

  buttonLabel = 'Kliknij mnie';
  buttonColor = '#28a745';

  // Możesz zaktualizować wartości, aby sprawdzić, czy Web Component reaguje
  updateButtonText() {
    this.buttonLabel = 'Nowy tekst przycisku';
    this.buttonColor = '#ff6347';
  }
}
