import { BaseAssembler } from '../../shared/infrastructure/base-assembler';
import { BookStock } from '../domain/model/book-stock.entity';
import { BookStockResource, BookStocksResponse } from './book-stocks-response';

/**
 * Maps book stock resources into domain entities and back.
 * @author Carlos Céspedes
 */
export class BookStockAssembler implements BaseAssembler<
  BookStock,
  BookStockResource,
  BookStocksResponse
> {
  toEntitiesFromResponse(response: BookStocksResponse): BookStock[] {
    return response.bookStocks.map((resource) => this.toEntityFromResource(resource));
  }

  toEntityFromResource(resource: BookStockResource): BookStock {
    return new BookStock({
      id: resource.id,
      bookstoreId: resource.bookstoreId,
      bookKey: resource.bookKey,
      bookTitle: resource.bookTitle,
      authorName: resource.authorName,
      copies: resource.copies,
      receivedAt: new Date(resource.receivedAt),
    });
  }

  toResourceFromEntity(entity: BookStock): BookStockResource {
    return {
      id: entity.id,
      bookstoreId: entity.bookstoreId,
      bookKey: entity.bookKey,
      bookTitle: entity.bookTitle,
      authorName: entity.authorName,
      copies: entity.copies,
      receivedAt: entity.receivedAt.toISOString(),
    };
  }
}
