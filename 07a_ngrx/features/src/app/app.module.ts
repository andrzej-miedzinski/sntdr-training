import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentRxComponent } from './parent-rx/parent-rx.component';
import { ChildRxComponent } from './child-rx/child-rx.component';
import { ParentSignalComponent } from './parent-signal/parent-signal.component';
import { ChildSignalComponent } from './child-signal/child-signal.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentRxComponent,
    ChildRxComponent,
    ParentSignalComponent,
    ChildSignalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
