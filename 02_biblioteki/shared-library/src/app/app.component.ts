import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CapitalizePipe } from 'custom-pipes';
import { ApiService } from 'data-services';
import { ButtonComponent, CardComponent } from 'ui-components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ButtonComponent, CardComponent, HttpClientModule, CapitalizePipe],
  providers: [ApiService],
  template: `
    <h1>Welcome to {{title}}!</h1>

    <lib-button></lib-button>
    <lib-card></lib-card>

    <div>{{ data | json }}</div>

    <p>{{ 'hello world' | capitalize }}</p>
    
  `,
  styles: [],
})
export class AppComponent implements OnInit {
  title = 'shared-library';
  data: any;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getData().subscribe(response => {
      this.data = response;
    });
  }
}
