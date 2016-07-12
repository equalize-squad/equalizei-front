import { RouterConfig } from '@angular/router';
import { UsersComponent } from './users.component';
import { AuthGuard } from '../auth.guard';

export const UsersRoutes: RouterConfig = [{
  path: 'users',
  component: UsersComponent,
  canActivate: [AuthGuard]
}];