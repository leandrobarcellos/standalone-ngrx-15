import { createAction, props } from '@ngrx/store';
import { KkMessage } from 'src/kamil-konopka';

export const messagesKey = '[Messages]';

export const kkAddMessage = createAction(
  `${messagesKey} Add Message`,
  props<{ message: KkMessage }>()
);

export const kkDeleteMessage = createAction(
  `${messagesKey} Delete Message`,
  props<{ id: string }>()
);

export const kkDeleteMessageSuccess = createAction(
  `${messagesKey} Delete Message Success`
);

export const kkDeleteMessageError = createAction(
  `${messagesKey} Delete Message Error`,
  props<Error>()
);
