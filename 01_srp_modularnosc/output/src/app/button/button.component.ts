import { Component, EventEmitter, Input, Output } from '@angular/core';

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
  @Input() label: string = 'Kliknij mnie';
  @Input() color: string = '#007bff';

  @Output() clicked = new EventEmitter<void>(); // Emitowanie zdarzenia

  onClick() {
    this.clicked.emit(); // Informujemy rodzica o kliknięciu
  }
}