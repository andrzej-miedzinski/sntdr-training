import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './user.reducer';


@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    //StoreModule.forFeature('users', userReducer), // Rejestrujemy reduktor dla funkcji "users"
  ],
  exports: [UserComponent]
})
export class UserModule { }
