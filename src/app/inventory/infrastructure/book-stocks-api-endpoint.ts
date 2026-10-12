import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { BaseApiEndpoint } from '../../shared/infrastructure/base-api-endpoint';
import { BookStock } from '../domain/model/book-stock.entity';
import { BookStockResource, BookStocksResponse } from './book-stocks-response';
import { BookStockAssembler } from './book-stock-assembler';

/**
 * Endpoint for the book stocks of the platform provider.
 * @author Carlos Céspedes
 */
export class BookStocksApiEndpoint extends BaseApiEndpoint<
  BookStock,
  BookStockResource,
  BookStocksResponse,
  BookStockAssembler
> {
  constructor(http: HttpClient) {
    super(
      http,
      `${environment.platformProviderApiBaseUrl}${environment.platformProviderBookStocksEndpointPath}`,
      new BookStockAssembler(),
    );
  }
}
