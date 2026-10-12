import { inject, Injectable, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Bookstore } from '../domain/model/bookstore.entity';
import { BookstoresApi } from '../infrastructure/bookstores-api';

/**
 * Signal based state for the bookstores.
 * @author Carlos Céspedes
 */
@Injectable({ providedIn: 'root' })
export class BookstoresStore {
  readonly #bookstoresApi = inject(BookstoresApi);

  readonly #bookstoresSignal = signal<Bookstore[]>([]);
  readonly bookstores = this.#bookstoresSignal.asReadonly();

  readonly #errorSignal = signal<string | null>(null);
  readonly error = this.#errorSignal.asReadonly();

  constructor() {
    this.#bookstoresApi
      .getBookstores()
      .pipe(takeUntilDestroyed())
      .subscribe({
        next: (bookstores) => this.#bookstoresSignal.set(bookstores),
        error: (err) => this.#errorSignal.set(err.message),
      });
  }

  getBookstoreBySpecialty(specialty: string): Bookstore | undefined {
    return this.bookstores().find((bookstore) => bookstore.specialty === specialty);
  }
}
