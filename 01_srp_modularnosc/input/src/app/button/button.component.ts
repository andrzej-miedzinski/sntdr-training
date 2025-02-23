import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  template: `
    <button [style.background-color]="color" (click)="onClick()">
      {{ label }}
    </button>
  `,
  styles: [`
    button {
      padding: 10px;
      border: none;
      color: white;
      cursor: pointer;
    }
  `]
})
export class ButtonComponent {
  @Input() label: string = 'Kliknij mnie'; // Etykieta przycisku
  @Input() color: string = '#007bff';     // Kolor tła przycisku

  onClick() {
    console.log('Przycisk został kliknięty!');
  }
}