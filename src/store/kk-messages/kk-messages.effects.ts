import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { KkMessagesApiService } from 'src/kamil-konopka/kk-messages-api.service';
import {
  kkDeleteMessage,
  kkDeleteMessageError,
  kkDeleteMessageSuccess,
} from './kk-messages.actions';
import { catchError, map, mergeMap } from 'rxjs';

export const kkDeleteMessage$ = createEffect(
  (
    actions$: Actions = inject(Actions),
    messagesApiService: KkMessagesApiService = inject(KkMessagesApiService)
  ) =>
    actions$.pipe(
      ofType(kkDeleteMessage),
      mergeMap(({ id }) =>
        messagesApiService.deleteMessage(id).pipe(
          map(() => kkDeleteMessageSuccess()),
          catchError((e) => [kkDeleteMessageError(e)])
        )
      )
    ),
  { functional: true }
);
