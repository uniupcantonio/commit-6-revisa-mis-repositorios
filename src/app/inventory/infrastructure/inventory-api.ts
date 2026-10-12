import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi } from '../../shared/infrastructure/base-api';
import { BookStock } from '../domain/model/book-stock.entity';
import { BookStocksApiEndpoint } from './book-stocks-api-endpoint';

/**
 * Facade for the platform provider operations of the inventory bounded context.
 * @author Carlos Céspedes
 */
@Injectable({ providedIn: 'root' })
export class InventoryApi extends BaseApi {
  readonly #bookStocksEndpoint = new BookStocksApiEndpoint(this.http);

  getBookStocks(): Observable<BookStock[]> {
    return this.#bookStocksEndpoint.getAll();
  }

  createBookStock(bookStock: BookStock): Observable<BookStock> {
    return this.#bookStocksEndpoint.create(bookStock);
  }
}
