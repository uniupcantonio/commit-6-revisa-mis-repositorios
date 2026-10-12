import { inject, Injectable, signal } from '@angular/core';
import { Book } from '../domain/model/book.entity';
import { CatalogApi } from '../infrastructure/catalog-api';

/**
 * Store for the books of the Open Library catalog.
 * @author Carlos Céspedes
 */
@Injectable({ providedIn: 'root' })
export class CatalogStore {
  private catalogApi = inject(CatalogApi);

  readonly books = signal<Book[]>([]);
  readonly loading = signal<boolean>(false);
  readonly error = signal<string | null>(null);

  loadBooksBySpecialty(specialty: string): void {
    this.books.set([]);
    this.error.set(null);
    this.loading.set(true);
    this.catalogApi.getBooksBySpecialty(specialty).subscribe({
      next: (books) => {
        this.books.set(books);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set(err.message);
        this.loading.set(false);
      },
    });
  }

  getBookByKey(key: string): Book | undefined {
    return this.books().find((book) => book.key === key);
  }
}
