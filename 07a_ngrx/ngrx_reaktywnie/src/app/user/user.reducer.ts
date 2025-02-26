import { createReducer, on } from '@ngrx/store';
import { loadUsersSuccess, loadUsersFailure } from './user.actions';

export interface UserState {
  users: any[];
  error: any;
}

const initialState: UserState = {
  users: [],
  error: null,
};

export const userReducer = createReducer(
  initialState,
  on(loadUsersSuccess, (state, { users }) => ({ ...state, users })),
  on(loadUsersFailure, (state, { error }) => ({ ...state, error }))
);