import { Routes } from '@angular/router';
import { firstRoutes } from 'src/first/first.routes';
import { funOfheuristicsRoutes } from 'src/fun-ofheuristic/fun-ofheuristic.routes';
import { kamilKonopkaRoutes } from 'src/kamil-konopka/kamil-konopka.routes';
import { secondRoutes } from 'src/second/second.routes';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => firstRoutes,
      },
      {
        path: 'second',
        loadChildren: () => secondRoutes,
      },
      {
        path: 'fun-ofheuristic',
        loadChildren: () => funOfheuristicsRoutes,
      },
      {
        path: 'kamil-konopka',
        loadChildren: () => kamilKonopkaRoutes
      },
    ],
  },
];
