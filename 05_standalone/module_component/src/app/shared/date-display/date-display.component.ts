import { Component } from '@angular/core';

@Component({
  selector: 'app-date-display',
  template: `<p>Data: {{ today | date:'longDate' }}</p>`
})
export class DateDisplayComponent {
  today = new Date();
}