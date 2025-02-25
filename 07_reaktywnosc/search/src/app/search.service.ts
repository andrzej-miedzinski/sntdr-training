import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchSubject = new Subject<string>();

  search$ = this.searchSubject.pipe(
    debounceTime(300), // Opoźnienie o 300ms
    distinctUntilChanged() // Emituje tylko, gdy wartość się zmienia
  );

  setSearchQuery(query: string) {
    this.searchSubject.next(query);
  }
}