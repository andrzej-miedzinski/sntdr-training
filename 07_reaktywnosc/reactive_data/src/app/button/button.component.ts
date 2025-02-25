import { Component } from '@angular/core';
import { ClickService } from '../click.service';

@Component({
  selector: 'app-button',
  template: `<button (click)="onClick()">Kliknij mnie</button>`
})
export class ButtonComponent {
  constructor(private clickService: ClickService) {}

  onClick() {
    this.clickService.notifyClick();
  }
}