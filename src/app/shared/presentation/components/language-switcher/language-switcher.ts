import { Component, inject } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { TranslateService } from '@ngx-translate/core';

/**
 * Select buttons to switch the application language.
 * @author Carlos Céspedes
 */
@Component({
  selector: 'app-language-switcher',
  imports: [MatButtonToggleModule],
  templateUrl: './language-switcher.html',
  styleUrl: './language-switcher.css',
})
export class LanguageSwitcher {
  readonly #translate = inject(TranslateService);
  protected currentLang = this.#translate.getCurrentLang() ?? 'en';
  protected readonly languages = [...this.#translate.getLangs()];

  protected useLanguage(language: string): void {
    this.#translate.use(language);
    this.currentLang = language;
  }
}
