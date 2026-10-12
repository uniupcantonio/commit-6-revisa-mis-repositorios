import { Book } from '../domain/model/book.entity';
import { BookResource, BooksResponse } from './books-response';

/**
 * Maps Open Library book resources into Book entities.
 * @author Carlos Céspedes
 */
export class BookAssembler {
  toEntitiesFromResponse(response: BooksResponse): Book[] {
    return (response.works ?? []).map((resource) => this.toEntityFromResource(resource));
  }

  toEntityFromResource(resource: BookResource): Book {
    return new Book({
      key: resource.key,
      title: resource.title,
      authorName: resource.authors?.[0]?.name ?? 'Unknown Author',
    });
  }
}
