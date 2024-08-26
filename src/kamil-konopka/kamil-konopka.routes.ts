import { KamilKonopkaComponent } from './kamil-konopka.component';
import { Route } from '@angular/router';
import { KkMessagesComponent } from './kk-messages/kk-messages.component';
import { provideEffects } from '@ngrx/effects';
import { allKkMessagesEffects } from 'src/store/kk-messages';

export const kamilKonopkaRoutes: Route[] = [
  {
    path: '',
    component: KamilKonopkaComponent,
    children: [
      {
        path: '',
        loadComponent: () => KkMessagesComponent,
      },
    ],
    providers: [provideEffects(allKkMessagesEffects)],
  },
];
