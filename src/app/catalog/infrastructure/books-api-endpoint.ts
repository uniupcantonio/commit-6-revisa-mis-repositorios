import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { ErrorHandlingEnabledBaseType } from '../../shared/infrastructure/error-handling-enabled-base-type';
import { Book } from '../domain/model/book.entity';
import { BooksResponse } from './books-response';
import { BookAssembler } from './book-assembler';

/**
 * Endpoint for the books of a subject in the Open Library API.
 * @author Carlos Céspedes
 */
export class BooksApiEndpoint extends ErrorHandlingEnabledBaseType {
  private assembler = new BookAssembler();

  constructor(private http: HttpClient) {
    super();
  }

  getBySpecialty(specialty: string): Observable<Book[]> {
    const url = `${environment.openLibraryApiBaseUrl}${environment.openLibrarySubjectsEndpointPath}/${specialty}.json`;
    const params = { limit: environment.openLibraryBooksLimit };
    return this.http.get<BooksResponse>(url, { params }).pipe(
      map((response) => this.assembler.toEntitiesFromResponse(response)),
      catchError(this.handleError('Failed to fetch books')),
    );
  }
}
