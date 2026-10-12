import { Routes } from '@angular/router';

const bookStockForm = () =>
  import('./views/book-stock-form/book-stock-form').then((m) => m.BookStockForm);

/**
 * Child routes of the inventory bounded context.
 * @author Carlos Céspedes
 */
export const inventoryRoutes: Routes = [
  { path: 'receipts/new', loadComponent: bookStockForm, title: 'Barnes & Noble - Receive Books' },
];
