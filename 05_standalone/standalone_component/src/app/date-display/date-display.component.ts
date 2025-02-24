import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-date-display',
  standalone: true,
  imports: [DatePipe], // Bezpośrednie importowanie potoku
  template: `<p>Data: {{ today | date:'longDate' }}</p>`
})
export class DateDisplayComponent {
  today = new Date();
}