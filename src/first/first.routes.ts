import { Routes } from '@angular/router';
import { FirstHomeComponent } from './first-home/first-home.component';
import { FirstSubComponent } from './first-sub/first-sub.component';
import { FirstComponent } from './first.component';

export const firstRoutes: Routes = [
  {
    path: '',
    component: FirstComponent,
    children: [
      {
        path: '',
        component: FirstHomeComponent
      },
      {
        path: 'first-sub',
        component: FirstSubComponent
      },
    ]
  }
];
