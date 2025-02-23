import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  template: `
    <div class="card">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <button (click)="onAction()">Więcej</button>
    </div>
  `,
  styles: [`
    .card {
      border: 1px solid #ccc;
      padding: 16px;
      border-radius: 8px;
      max-width: 300px;
    }
    button {
      background-color: #007bff;
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover {
      background-color: #0056b3;
    }
  `]
})
export class CardComponent {
  @Input() title: string = 'Tytuł karty';
  @Input() description: string = 'Opis karty...';
  @Output() action = new EventEmitter<void>();

  onAction() {
    this.action.emit();
  }
}