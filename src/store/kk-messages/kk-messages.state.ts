import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { KkMessage } from '../../kamil-konopka';

export interface KkMessagesState extends EntityState<KkMessage> {
  loading: [];
}

export const selectId = ({ id }: KkMessage) => id;

export const sortComparer = (a: KkMessage, b: KkMessage): number =>
  a.publishDate.toString().localeCompare(b.publishDate.toString());

export const kkMessageAdapter: EntityAdapter<KkMessage> = createEntityAdapter({
  selectId,
  sortComparer,
});

export const kkMessageInitialState: KkMessagesState = kkMessageAdapter.getInitialState({
  loading: [],
});
