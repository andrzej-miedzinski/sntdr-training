import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { HighlightDirective } from './highlight.directive';
import { UppercasePipe } from './uppercase.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    HighlightDirective,
    UppercasePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
