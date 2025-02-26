import { createReducer, on } from '@ngrx/store';
import { loginSuccess, loginFailure } from './auth.actions';

export interface AuthState {
  user: any;
  error: any;
}

const initialState: AuthState = {
  user: null,
  error: null,
};

export const authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, { user }) => ({ ...state, user })),
  on(loginFailure, (state, { error }) => ({ ...state, error }))
);