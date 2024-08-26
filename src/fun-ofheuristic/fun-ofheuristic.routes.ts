import { Route } from '@angular/router';
import { FoLoginComponent } from './fo-login/fo-login.component';
import { FoUserComponent } from './fo-user/fo-user.component';
import { FoSignupComponent } from './fo-signup/fo-signup.component';
import { FunOfheuristicComponent } from './fun-ofheuristic.component';

export const funOfheuristicsRoutes: Route[] = [
  {
    path: '',
    component: FunOfheuristicComponent,
    children: [
      {
        path: '',
        loadComponent: () => FoUserComponent,
      },
      {
        path: 'fo-login',
        loadComponent: () => FoLoginComponent,
      },
      {
        path: 'fo-signup',
        loadComponent: () => FoSignupComponent,
      },
    ],
  },
];
