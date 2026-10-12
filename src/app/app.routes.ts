import { Routes } from '@angular/router';

const pageNotFound = () =>
  import('./shared/presentation/views/page-not-found/page-not-found').then((m) => m.PageNotFound);

const bookstoresRoutes = () =>
  import('./bookstores/presentation/bookstores.routes').then((m) => m.bookstoresRoutes);

const inventoryRoutes = () =>
  import('./inventory/presentation/inventory.routes').then((m) => m.inventoryRoutes);

/**
 * Root routes of the application.
 * @author Carlos Céspedes
 */
export const routes: Routes = [
  { path: 'bookstores', loadChildren: bookstoresRoutes },
  { path: 'inventory', loadChildren: inventoryRoutes },
  { path: '', redirectTo: '/bookstores/overview', pathMatch: 'full' },
  { path: '**', loadComponent: pageNotFound, title: 'Barnes & Noble - Page Not Found' },
];
