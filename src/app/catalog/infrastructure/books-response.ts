/**
 * Book resource returned by the Open Library subjects endpoint.
 * @author Carlos Céspedes
 */
export interface BookResource {
  key: string;
  title: string;
  authors?: { name: string }[];
  first_publish_year?: number;
  cover_id?: number;
}

/**
 * Response of the Open Library subjects endpoint.
 * @author Carlos Céspedes
 */
export interface BooksResponse {
  key: string;
  name: string;
  work_count: number;
  works: BookResource[];
}
