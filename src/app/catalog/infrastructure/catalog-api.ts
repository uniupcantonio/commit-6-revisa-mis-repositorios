import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi } from '../../shared/infrastructure/base-api';
import { Book } from '../domain/model/book.entity';
import { BooksApiEndpoint } from './books-api-endpoint';

/**
 * Facade for the Open Library operations of the catalog bounded context.
 * @author Carlos Céspedes
 */
@Injectable({ providedIn: 'root' })
export class CatalogApi extends BaseApi {
  readonly #booksEndpoint = new BooksApiEndpoint(this.http);

  getBooksBySpecialty(specialty: string): Observable<Book[]> {
    return this.#booksEndpoint.getBySpecialty(specialty);
  }
}
