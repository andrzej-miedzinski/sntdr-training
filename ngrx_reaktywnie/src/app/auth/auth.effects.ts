import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { login, loginSuccess, loginFailure } from './auth.actions';
import { AuthService } from './auth.service';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      switchMap(action =>
        this.authService.login(action.credentials).pipe(
          map(() => loginSuccess()), // Jeżeli logowanie jest udane
          catchError((error) => of(loginFailure({ error: error.message }))) // Jeżeli wystąpi błąd
        )
      )
    )
  );
}


