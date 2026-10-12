import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';

/**
 * Base class for the API facades of each bounded context.
 * @author Carlos Céspedes
 */
export abstract class BaseApi {
  protected readonly http = inject(HttpClient);
}
