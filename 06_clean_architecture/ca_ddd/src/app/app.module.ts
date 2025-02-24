import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './presentation/user/user.component';
import { UserService } from './application/user.service';
import { USER_REPOSITORY } from './domain/user.repository';
import { UserHttpRepository } from './infrastructure/user.http.repository';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    { provide: USER_REPOSITORY, useClass: UserHttpRepository }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
