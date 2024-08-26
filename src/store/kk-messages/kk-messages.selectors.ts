import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';
import { AppState } from '.';
import { KkMessagesState } from './kk-messages.state';
import { KkMessage } from 'src/kamil-konopka';

export const kkSelectMessagesFeature: MemoizedSelector<
  AppState,
  KkMessagesState
> = createFeatureSelector<KkMessagesState>('messages');

export const kkSelectMessages: MemoizedSelector<AppState, KkMessage[]> =
  createSelector(
    kkSelectMessagesFeature,
    ({ entities }: KkMessagesState): KkMessage[] =>
      Object.values(entities) as KkMessage[]
  );
