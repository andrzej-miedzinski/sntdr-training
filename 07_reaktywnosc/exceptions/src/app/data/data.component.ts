import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-data',
  template: `
    <div *ngIf="isLoading">Ładowanie...</div>
    <div *ngIf="!isLoading">
      <pre>{{ data | json }}</pre>
    </div>
  `
})
export class DataComponent {
  data: any;
  isLoading = false;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.isLoading = true;
    this.dataService.getData().subscribe(data => {
      this.data = data;
      this.isLoading = false;
    });
  }
}