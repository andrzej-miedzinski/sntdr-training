import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ul>
      <li *ngFor="let item of items" (click)="onItemClick(item)">
        {{ item }}
      </li>
    </ul>
  `,
  styles: [`
    ul {
      list-style-type: none;
      padding: 0;
    }
    li {
      padding: 8px;
      border-bottom: 1px solid #ddd;
      cursor: pointer;
    }
    li:hover {
      background-color: #f9f9f9;
    }
  `]
})
export class ListComponent {
  @Input() items: string[] = [];
  @Output() itemSelected = new EventEmitter<string>();

  onItemClick(item: string) {
    this.itemSelected.emit(item);
  }
}