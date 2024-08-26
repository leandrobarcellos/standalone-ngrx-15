import * as kkMessagesEffects from './kk-messages.effects';
import { KkMessagesState } from './kk-messages.state';

export interface AppState {
  messages?: KkMessagesState;
}

export const allKkMessagesEffects = kkMessagesEffects;
