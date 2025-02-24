import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [], // Brak potrzeby importowania innych komponentów
  template: `<button>{{ label }}</button>`,
  styles: [`button { padding: 10px; background-color: #007bff; color: white; }`]
})
export class ButtonComponent {
  label = 'Kliknij mnie';
}