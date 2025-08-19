import type { Route } from '@angular/router';
import { PageNotFoundComponent } from './not-found/page-not-found.component';

export const routes: Route[] = [
  {
    path: '',
    loadChildren: async () =>
      import('./features/dashboard/dashboard.routes').then((module_) => module_.DASHBOARD_ROUTES),
  },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '404' },
];
