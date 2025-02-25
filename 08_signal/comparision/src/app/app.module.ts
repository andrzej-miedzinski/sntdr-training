import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterSignalComponent } from './counter-signal/counter-signal.component';
import { CounterRxjsComponent } from './counter-rxjs/counter-rxjs.component';
import { SumSignalComponent } from './sum-signal/sum-signal.component';
import { SumRxjsComponent } from './sum-rxjs/sum-rxjs.component';
import { FormsModule } from '@angular/forms';
import { LoggerSignalComponent } from './logger-signal/logger-signal.component';
import { LoggerRxjsComponent } from './logger-rxjs/logger-rxjs.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterSignalComponent,
    CounterRxjsComponent,
    SumSignalComponent,
    SumRxjsComponent,
    LoggerSignalComponent,
    LoggerRxjsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
