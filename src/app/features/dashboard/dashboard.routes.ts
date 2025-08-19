import { Routes } from '@angular/router';
import { DashboardPage } from './pages/dashboard.page';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    component: DashboardPage,
  },
  {
    path: 'dashboard',
    component: DashboardPage,
  }
];
