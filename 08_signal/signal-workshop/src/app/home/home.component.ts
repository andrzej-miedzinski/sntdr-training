import { Component } from '@angular/core';
import { signal } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  counter = signal(0);

  increment(): void {
    this.counter.update(value => value + 1);
  }

  decrement(): void {
    this.counter.update(value => value - 1);
  }
}