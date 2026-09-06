import { Routes } from '@angular/router';
import { Landing } from './features/landing/landing';
import { LoginComponent } from './features/auth/login/login';
import { RegisterComponent } from './features/auth/register/register';
import { Dashboard } from './features/dashboard/dashboard';
import { AppointmentComponent } from './features/appointment/appointment';
import { authGuard } from './common/service/auth.guard';
import { ServicesComponent } from './features/service/service';

export const routes: Routes = [
  {
    path: '',
    component: Landing,
    // canActivate: [authGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    // canActivate: [authGuard],
  },

  {
    path: 'service',
    component: ServicesComponent,
    // canActivate: [authGuard],
  },

  {
    path: 'dashboard',
    component: Dashboard,
    canActivate: [authGuard],
  },

  {
    path: 'appointment',
    component: AppointmentComponent,
    // canActivate: [authGuard],
  },

  {
    path: '**',
    redirectTo: '',
  },
];
