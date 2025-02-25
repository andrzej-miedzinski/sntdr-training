import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { SumComponent } from './sum/sum.component';

import { FormsModule } from '@angular/forms';
import { LoggerComponent } from './logger/logger.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    SumComponent,
    LoggerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
