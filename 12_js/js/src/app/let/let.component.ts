import { Component } from '@angular/core';

@Component({
  selector: 'app-let',
  templateUrl: './let.component.html',
  styleUrl: './let.component.css'
})
export class LetComponent {
  title = 'Nowoczesny JavaScript w Angularze';

  constructor() {
    const PI = 3.14; // Stała
    let radius = 5; // Zmienna

    console.log(`Pole koła: ${PI * radius * radius}`);

    radius = 10; // Możemy zmienić wartość zmiennej `radius`
    console.log(`Pole koła po zmianie promienia: ${PI * radius * radius}`);
  }
}