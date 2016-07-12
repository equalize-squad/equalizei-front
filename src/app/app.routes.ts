import { provideRouter, RouterConfig } from '@angular/router';

import { SignUpRoutes } from './+sign-up/sign-up.routes';
import { SignInRoutes } from './+sign-in/sign-in.routes';
import { UsersRoutes } from './+users/users.routes';
import { DashboardRoutes } from './+dashboard/dashboard.routes';
import { AuthGuard } from './auth.guard';
import { CanDeactivateGuard } from './interfaces';

export const routes: RouterConfig = [
  ...SignInRoutes,
  ...SignUpRoutes,
  ...UsersRoutes,
  ...DashboardRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
  AuthGuard,
  CanDeactivateGuard
];
