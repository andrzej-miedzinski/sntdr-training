import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ReactiveFlowComponent } from './reactive-flow/reactive-flow.component';

@NgModule({
  declarations: [AppComponent, ReactiveFlowComponent],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule {}