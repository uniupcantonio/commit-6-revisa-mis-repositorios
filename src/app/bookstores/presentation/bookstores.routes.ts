import { Routes } from '@angular/router';

const bookstoreOverview = () =>
  import('./views/bookstore-overview/bookstore-overview').then((m) => m.BookstoreOverview);

/**
 * Child routes of the bookstores bounded context.
 * @author Carlos Céspedes
 */
export const bookstoresRoutes: Routes = [
  {
    path: 'overview',
    loadComponent: bookstoreOverview,
    title: 'Barnes & Noble - Bookstore Overview',
  },
];
