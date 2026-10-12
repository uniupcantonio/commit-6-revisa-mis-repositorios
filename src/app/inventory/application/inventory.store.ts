import { inject, Injectable, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BookStock } from '../domain/model/book-stock.entity';
import { InventoryApi } from '../infrastructure/inventory-api';

/**
 * Signal based state for the book stocks.
 * @author Carlos Céspedes
 */
@Injectable({ providedIn: 'root' })
export class InventoryStore {
  readonly #inventoryApi = inject(InventoryApi);

  readonly #bookStocksSignal = signal<BookStock[]>([]);
  readonly bookStocks = this.#bookStocksSignal.asReadonly();

  readonly #errorSignal = signal<string | null>(null);
  readonly error = this.#errorSignal.asReadonly();

  constructor() {
    this.#inventoryApi
      .getBookStocks()
      .pipe(takeUntilDestroyed())
      .subscribe({
        next: (bookStocks) => this.#bookStocksSignal.set(bookStocks),
        error: (err) => this.#errorSignal.set(err.message),
      });
  }

  getBookStocksByBookstoreId(bookstoreId: number): BookStock[] {
    return this.bookStocks().filter((bookStock) => bookStock.bookstoreId === bookstoreId);
  }
}
