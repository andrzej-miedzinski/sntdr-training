import { Component } from '@angular/core';

@Component({
  selector: 'app-destruct',
  templateUrl: './destruct.component.html',
  styleUrl: './destruct.component.css'
})
export class DestructComponent {
    // Obiekt użytkownika
    userData = { name: 'Jan', age: 30, email: 'jan@example.com' };
  
    // Destrukturyzacja
    user = { ...this.userData };
  
    constructor() {
      const { name, age } = this.userData; // Destrukturyzacja obiektu
      console.log(`Użytkownik: ${name}, wiek: ${age}`);
    }
}
