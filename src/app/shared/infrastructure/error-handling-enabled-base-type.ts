import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

/**
 * Base type that turns HTTP errors into readable error messages.
 * @author Carlos Céspedes
 */
export abstract class ErrorHandlingEnabledBaseType {
  protected handleError(operation: string) {
    return (error: HttpErrorResponse): Observable<never> => {
      let errorMessage: string;
      if (error.status === 404) {
        errorMessage = `${operation}: Resource not found`;
      } else if (error.error instanceof ErrorEvent) {
        errorMessage = `${operation}: ${error.error.message}`;
      } else {
        errorMessage = `${operation}: ${error.status || 'Unexpected error'}`;
      }
      return throwError(() => new Error(errorMessage));
    };
  }
}
