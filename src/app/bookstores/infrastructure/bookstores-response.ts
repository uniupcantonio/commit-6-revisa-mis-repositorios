import { BaseResource, BaseResponse } from '../../shared/infrastructure/base-response';

/**
 * Wrapped response with a list of bookstores.
 * @author Carlos Céspedes
 */
export interface BookstoresResponse extends BaseResponse {
  bookstores: BookstoreResource[];
}

/**
 * Bookstore resource of the platform provider.
 * @author Carlos Céspedes
 */
export interface BookstoreResource extends BaseResource {
  id: number;
  name: string;
  specialty: string;
  minimumCopies: number;
}
