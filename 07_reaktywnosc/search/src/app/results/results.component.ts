import { Component } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-results',
  template: `<p>Szukane zapytanie: {{ query }}</p>`
})
export class ResultsComponent {
  query: string = '';

  constructor(private searchService: SearchService) {}

  ngOnInit() {
    this.searchService.search$.subscribe(query => {
      this.query = query;
    });
  }
}