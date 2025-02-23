import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="modal-overlay" *ngIf="visible">
      <div class="modal-content">
        <h2>{{ title }}</h2>
        <p>{{ content }}</p>
        <button (click)="onClose()">Zamknij</button>
        <button (click)="onConfirm()">Potwierdź</button>
      </div>
    </div>
  `,
  styles: [`
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .modal-content {
      background-color: white;
      padding: 20px;
      border-radius: 8px;
      text-align: center;
    }
    button {
      margin: 8px;
      padding: 8px 16px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:first-child {
      background-color: #ccc;
    }
    button:last-child {
      background-color: #007bff;
      color: white;
    }
  `]
})
export class ModalComponent {
  @Input() visible: boolean = false;
  @Input() title: string = 'Tytuł modala';
  @Input() content: string = 'Treść modala...';
  @Output() close = new EventEmitter<void>();
  @Output() confirm = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }

  onConfirm() {
    this.confirm.emit();
  }
}