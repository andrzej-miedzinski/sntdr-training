import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
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
  @Input() label: string = 'Kliknij mnie';
  @Input() color: string = '#007bff';

  onClick() {
    console.log('Przycisk został kliknięty!');
  }
}