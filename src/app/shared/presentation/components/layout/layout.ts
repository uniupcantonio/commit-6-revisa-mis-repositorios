import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { TranslatePipe } from '@ngx-translate/core';
import { environment } from '../../../../../environments/environment';
import { LogoApi } from '../../../infrastructure/logo-api';
import { LanguageSwitcher } from '../language-switcher/language-switcher';

/**
 * Application layout with the toolbar, the sidenav and the routed content.
 * @author Carlos Céspedes
 */
@Component({
  selector: 'app-layout',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    TranslatePipe,
    LanguageSwitcher,
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
  protected readonly logoUrl = inject(LogoApi).getUrlForDomain(environment.barnesAndNobleDomain);
  protected readonly options = signal([
    { link: '/bookstores/overview', label: 'option.bookstore-overview' },
    { link: '/inventory/receipts/new', label: 'option.receive-books' },
  ]);
}
