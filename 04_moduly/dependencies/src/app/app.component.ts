import { Component } from '@angular/core';
import { AuthService } from './core/auth.service';
import { ConfigService } from './core/config.service';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="login()">Zaloguj się</button>
    <button (click)="logout()">Wyloguj się</button>

    <p>API URL: {{ config.apiUrl }}</p>
  `
})
export class AppComponent {
  config: any;
  
  constructor(private authService: AuthService, private configService: ConfigService) {
    this.config = this.configService.getConfig();
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}