import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseApi } from '../../shared/infrastructure/base-api';
import { Bookstore } from '../domain/model/bookstore.entity';
import { BookstoresApiEndpoint } from './bookstores-api-endpoint';

/**
 * Facade for the platform provider operations of the bookstores bounded context.
 * @author Carlos Céspedes
 */
@Injectable({ providedIn: 'root' })
export class BookstoresApi extends BaseApi {
  readonly #bookstoresEndpoint = new BookstoresApiEndpoint(this.http);

  getBookstores(): Observable<Bookstore[]> {
    return this.#bookstoresEndpoint.getAll();
  }
}
