import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserListComponent } from './presentation/user-list.component';
import { UserService } from './application/user.service';
import { UserHttpRepository } from './infrastructure/user-http.repository';
import { USER_REPOSITORY } from './domain/user.repository';

@NgModule({
  declarations: [AppComponent, UserListComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [
    { provide: USER_REPOSITORY, useClass: UserHttpRepository },
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}