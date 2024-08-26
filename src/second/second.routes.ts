import { Routes } from '@angular/router';
import { SecondComponent } from './second.component';
import { SecondSubComponent } from './second-sub/second-sub.component';
import { SecondHomeComponent } from './second-home/second-home.component';

export const secondRoutes: Routes = [
  {
    path: '',
    component: SecondComponent,
    children: [
      {
        path: '',
        component: SecondHomeComponent,
      },
      {
        path: 'second-sub',
        component: SecondSubComponent,
      },
    ],
  },
];
