import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardComponent],
  template: `
    <h1>Welcome to {{title}}!</h1>

    <app-card 
  [title]="'Artykuł 1'" 
  [description]="'To jest opis artykułu 1.'" 
  (action)="onCardClick('Artykuł 1')">
</app-card>

<app-card 
  [title]="'Produkt A'" 
  [description]="'To jest opis produktu A.'" 
  (action)="onCardClick('Produkt A')">
</app-card>
  `,
  styles: [],
})
export class AppComponent {
  title = 'card';

  onCardClick(item: string) {
    console.log(`Kliknięto na: ${item}`);
  }
}
