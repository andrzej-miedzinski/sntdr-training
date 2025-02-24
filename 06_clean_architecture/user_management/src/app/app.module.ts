import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserService } from './application/user.service';
import { USER_REPOSITORY } from './domain/user.repository';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './presentation/user-list.component';
import { UserHttpRepository } from './infrastructure/user-http.repository';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent
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
