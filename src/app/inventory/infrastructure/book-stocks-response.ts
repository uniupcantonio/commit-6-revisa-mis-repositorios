import { BaseResource, BaseResponse } from '../../shared/infrastructure/base-response';

/**
 * Wrapped response with a list of book stocks.
 * @author Carlos Céspedes
 */
export interface BookStocksResponse extends BaseResponse {
  bookStocks: BookStockResource[];
}

/**
 * Book stock resource of the platform provider.
 * @author Carlos Céspedes
 */
export interface BookStockResource extends BaseResource {
  id: number;
  bookstoreId: number;
  bookKey: string;
  bookTitle: string;
  authorName: string;
  copies: number;
  receivedAt: string;
}
