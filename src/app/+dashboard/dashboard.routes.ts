import { RouterConfig } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AuthGuard } from '../auth.guard';

export const DashboardRoutes: RouterConfig = [
  {
    path: '',
    redirectTo: '/dashboard',
    terminal: true
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  }
];