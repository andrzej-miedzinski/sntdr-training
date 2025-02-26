import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LetComponent } from './let/let.component';
import { ArrowComponent } from './arrow/arrow.component';
import { DestructComponent } from './destruct/destruct.component';
import { AllInComponent } from './all-in/all-in.component';

@NgModule({
  declarations: [
    AppComponent,
    LetComponent,
    ArrowComponent,
    DestructComponent,
    AllInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
