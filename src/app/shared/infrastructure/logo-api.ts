import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

/**
 * Builds image URLs from the Logo.dev Logo API.
 * @author Carlos Céspedes
 */
@Injectable({ providedIn: 'root' })
export class LogoApi {
  getUrlForDomain(domain: string): string {
    return `${environment.logoProviderApiBaseUrl}/${domain}?token=${environment.logoProviderApiToken}`;
  }
}
