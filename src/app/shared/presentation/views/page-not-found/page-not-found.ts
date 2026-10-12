import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { TranslatePipe } from '@ngx-translate/core';

/**
 * View shown when the requested route does not exist.
 * @author Carlos Céspedes
 */
@Component({
  selector: 'app-page-not-found',
  imports: [MatButton, TranslatePipe],
  templateUrl: './page-not-found.html',
  styleUrl: './page-not-found.css',
})
export class PageNotFound {
  readonly #router = inject(Router);
  protected readonly invalidPath = inject(ActivatedRoute)
    .snapshot.url.map((segment) => segment.path)
    .join('/');

  protected navigateToBookstoreOverview(): void {
    this.#router.navigate(['/bookstores/overview']).then();
  }
}
