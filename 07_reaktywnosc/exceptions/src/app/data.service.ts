import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, finalize, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://api.example.com/data';
  isLoading = false;

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    this.isLoading = true;
    return this.http.get<any>(this.apiUrl).pipe(
      tap(data => console.log('Dane pobrane:', data)),
      catchError(error => {
        console.error('Błąd:', error);
        return of(null); // Zwraca wartość domyślną w przypadku błędu
      }),
      finalize(() => this.isLoading = false) // Resetuje flagę ładowania
    );
  }
}