import { Component } from '@angular/core';

@Component({
  selector: 'app-arrow',
  templateUrl: './arrow.component.html',
  styleUrl: './arrow.component.css'
})
export class ArrowComponent {
  name = 'Arrow';

  // Funkcja strzałkowa
  greet = () => {
    return `Witaj, ${this.name}!`;
  };

  constructor() {
    console.log(this.greet()); // Wywołanie funkcji strzałkowej
  }
}
