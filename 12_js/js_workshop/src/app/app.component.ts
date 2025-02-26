import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'workshop';
  user = { name: 'Jan', age: 30 }; // Starsza składnia `var`

  constructor() {
    console.log('Tytuł:', this.title);
    console.log('Użytkownik:', this.user);
  }

  calculateSum(a : any, b : any) {
    return a + b;
  }
}
