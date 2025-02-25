import { Component } from '@angular/core';
import { StateService } from './state.service';

@Component({
  selector: 'app-root',
  template: `
    <div [class.dark]="theme === 'dark'">
      <app-theme-toggle></app-theme-toggle>
      <p>Aktualny motyw: {{ theme }}</p>
    </div>
  `,
  styles: [`
    .dark {
      background-color: black;
      color: white;
    }
  `]
})
export class AppComponent {
  theme: string = 'light';

  constructor(private stateService: StateService) {}

  ngOnInit() {
    this.stateService.state$.subscribe(state => {
      this.theme = state.theme;
    });
  }
}