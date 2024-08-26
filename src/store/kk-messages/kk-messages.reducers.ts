import { ActionReducer, createReducer, on } from '@ngrx/store';
import {
  kkMessageAdapter,
  kkMessageInitialState,
  KkMessagesState,
} from './kk-messages.state';
import { kkAddMessage, kkDeleteMessage } from './kk-messages.actions';

export const kkMessagesReducers: ActionReducer<KkMessagesState> = createReducer(
  kkMessageInitialState,
  on(kkAddMessage, (state: KkMessagesState, { message }) =>
    kkMessageAdapter.addOne(message, state)
  ),
  on(kkDeleteMessage, (state: KkMessagesState, { id }) =>
    kkMessageAdapter.removeOne(id, state)
  )
);
