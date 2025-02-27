import { createReducer, on } from '@ngrx/store';
import { login, loginSuccess, loginFailure } from './auth.actions';

export interface AuthState {
  isLoggedIn: boolean;
  error: string | null;
}

export const initialState: AuthState = {
  isLoggedIn: false,
  error: null,
};

export const authReducer = createReducer(
  initialState,
  on(login, state => ({ ...state, error: null })), // Przy próbie logowania resetujemy błąd
  on(loginSuccess, state => ({ ...state, isLoggedIn: true, error: null })), // Po udanym logowaniu
  on(loginFailure, (state, { error }) => ({ ...state, isLoggedIn: false, error })) // W przypadku błędu
);
