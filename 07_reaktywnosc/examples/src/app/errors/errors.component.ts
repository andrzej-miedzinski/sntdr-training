import { Component } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-errors',
  template: `
    <button (click)="startStream()">Obsluga bledow</button>
  `,
  styles: ``
})
export class ErrorsComponent {
  startStream() {
    ajax.getJSON('https://api.example.com/invalid-endpoint').pipe(
      catchError(error => {
        console.error('Błąd:', error);
        return of({ error: 'Nie udało się pobrać danych' });
      })
    ).subscribe(data => console.log(data));
  }
}
