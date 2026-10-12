import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { BaseApiEndpoint } from '../../shared/infrastructure/base-api-endpoint';
import { Bookstore } from '../domain/model/bookstore.entity';
import { BookstoreResource, BookstoresResponse } from './bookstores-response';
import { BookstoreAssembler } from './bookstore-assembler';

/**
 * Endpoint for the bookstores of the platform provider.
 * @author Carlos Céspedes
 */
export class BookstoresApiEndpoint extends BaseApiEndpoint<
  Bookstore,
  BookstoreResource,
  BookstoresResponse,
  BookstoreAssembler
> {
  constructor(http: HttpClient) {
    super(
      http,
      `${environment.platformProviderApiBaseUrl}${environment.platformProviderBookstoresEndpointPath}`,
      new BookstoreAssembler(),
    );
  }
}
