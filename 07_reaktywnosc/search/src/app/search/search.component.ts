import { Component } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  template: `
    <input type="text" (input)="onSearch($event)" placeholder="Wyszukaj..." />
  `
})
export class SearchComponent {
  constructor(private searchService: SearchService) {}

  onSearch(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement) {
      this.searchService.setSearchQuery(inputElement.value);
    }
  }
}
