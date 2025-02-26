import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.reducer';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectUser = createSelector(
  selectAuthState,
  (state) => state.user
);

export const selectIsLoggedIn = createSelector(
  selectAuthState,
  (state) => !!state.user // Sprawdza, czy użytkownik jest zalogowany
);

export const selectLoginError = createSelector(
  selectAuthState,
  (state) => state.error
);