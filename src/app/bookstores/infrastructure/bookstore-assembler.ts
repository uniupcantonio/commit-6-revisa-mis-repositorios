import { BaseAssembler } from '../../shared/infrastructure/base-assembler';
import { Bookstore } from '../domain/model/bookstore.entity';
import { BookstoreResource, BookstoresResponse } from './bookstores-response';

/**
 * Maps bookstore resources into domain entities and back.
 * @author Carlos Céspedes
 */
export class BookstoreAssembler implements BaseAssembler<
  Bookstore,
  BookstoreResource,
  BookstoresResponse
> {
  toEntitiesFromResponse(response: BookstoresResponse): Bookstore[] {
    return response.bookstores.map((resource) => this.toEntityFromResource(resource));
  }

  toEntityFromResource(resource: BookstoreResource): Bookstore {
    return new Bookstore({
      id: resource.id,
      name: resource.name,
      specialty: resource.specialty,
      minimumCopies: resource.minimumCopies,
    });
  }

  toResourceFromEntity(entity: Bookstore): BookstoreResource {
    return {
      id: entity.id,
      name: entity.name,
      specialty: entity.specialty,
      minimumCopies: entity.minimumCopies,
    };
  }
}
