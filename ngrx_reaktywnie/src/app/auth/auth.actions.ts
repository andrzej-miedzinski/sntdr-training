import { createAction, props } from '@ngrx/store';

// Akcja uruchamiająca próbę logowania
export const login = createAction(
  '[Auth] Login',
  props<{ credentials: { username: string, password: string } }>()
);

// Akcja sygnalizująca zakończenie procesu logowania
export const loginSuccess = createAction(
  '[Auth] Login Success'
);

// Akcja sygnalizująca błąd logowania
export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: string }>()
);
