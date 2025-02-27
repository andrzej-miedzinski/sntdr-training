import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { authReducer } from './auth.reducer';
import { AuthEffects } from './auth.effects';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AuthComponent, // Deklarujemy komponent
  ],
  imports: [
    CommonModule, // Podstawowy moduł Angulara
    FormsModule,  // Umożliwia użycie ngModel do dwukierunkowego wiązania danych
    EffectsModule.forFeature(AuthEffects), // Rejestrujemy efekty dla tego feature'a
    StoreModule.forFeature('auth', authReducer), // Rejestrujemy reducer w StoreModule dla konkretnego feature'a
  ],
  providers: [], // Dostawca usługi logowania
  exports: [AuthComponent], // Eksportujemy komponent, aby można było go używać w innych modułach
})
export class AuthModule { }
