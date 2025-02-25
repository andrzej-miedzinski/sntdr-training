import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreationComponent } from './creation/creation.component';
import { FilterComponent } from './filter/filter.component';
import { DOMComponent } from './dom/dom.component';
import { MergeComponent } from './merge/merge.component';
import { LimiterComponent } from './limiter/limiter.component';
import { ErrorsComponent } from './errors/errors.component';
import { CombineComponent } from './combine/combine.component';

@NgModule({
  declarations: [
    AppComponent,
    CreationComponent,
    FilterComponent,
    DOMComponent,
    MergeComponent,
    LimiterComponent,
    ErrorsComponent,
    CombineComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
