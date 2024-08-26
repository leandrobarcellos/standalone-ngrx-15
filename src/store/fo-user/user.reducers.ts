import { createReducer, createSelector, on } from '@ngrx/store';
import { addUser, getUser, updateUser } from './user.actions';

export interface UserState {
  users: User[];
}

export interface User {
  userId: number;
  name: string;
}

const initialState: User[] = [];

export const foUserReducer = createReducer(
  initialState,
  on(getUser, (_, { users }) => [...users]),
  on(addUser, (state, { user }) => [...state, user]),
  on(updateUser, (state, { user }) => [ ...state.filter(u => user.userId !== u.userId), user])
);

export const usersSelector = createSelector(
  (state: UserState) => state.users,
  (users) => users
);

export const firstUserSelector = createSelector(
  (state: UserState) => state.users,
  (users) => users && users[0]
);
