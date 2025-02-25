import { Component } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-theme-toggle',
  template: `
    <button (click)="toggleTheme()">Przełącz motyw</button>
  `
})
export class ThemeToggleComponent {
  constructor(private stateService: StateService) {}

  toggleTheme() {
    const currentTheme = this.stateService.stateSubject.getValue().theme;
    this.stateService.updateTheme(currentTheme === 'light' ? 'dark' : 'light');
  }
  
}