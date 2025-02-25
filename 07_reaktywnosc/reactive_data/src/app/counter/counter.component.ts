import { Component } from '@angular/core';
import { ClickService } from '../click.service';

@Component({
  selector: 'app-counter',
  template: `<p>Liczba kliknięć: {{ count }}</p>`
})
export class CounterComponent {
  count = 0;

  constructor(private clickService: ClickService) {}

  ngOnInit() {
    this.clickService.click$.subscribe(() => {
      this.count++;
    });
  }
}