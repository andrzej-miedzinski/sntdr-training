import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-rx',
  template: `
    <p>Dziecko otrzymało: {{ data }}</p>
    <input [value]="data" (input)="onInputChange($event)" />
  `
})
export class ChildRxComponent {
  @Input() data!: string;
  @Output() update = new EventEmitter<string>();

  onInputChange(event: Event) {
    const newValue = (event.target as HTMLInputElement).value;
    this.update.emit(newValue);
  }
}
