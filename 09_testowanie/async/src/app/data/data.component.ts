import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-data',
  template: `<p>{{ data$ | async }}</p>`
})
export class DataComponent implements OnInit {
  data$: Observable<string> | undefined;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.data$ = this.dataService.getData();
  }
}