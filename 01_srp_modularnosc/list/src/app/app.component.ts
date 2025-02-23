import { Component } from '@angular/core';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListComponent],
  template: `
    <h1>Welcome to {{title}}!</h1>

    <app-list 
      [items]="['Zadanie 1', 'Zadanie 2', 'Zadanie 3']" 
      (itemSelected)="onTaskSelect($event)">
    </app-list>

    
  `,
  styles: [],
})
export class AppComponent {
  title = 'list';

  onTaskSelect(task: string) {
    console.log(`Wybrano zadanie: ${task}`);
  }
}
