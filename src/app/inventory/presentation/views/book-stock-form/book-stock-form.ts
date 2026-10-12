import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { TranslatePipe } from '@ngx-translate/core';
import { BookstoresStore } from '../../../../bookstores/application/bookstores.store';
import { CatalogStore } from '../../../../catalog/application/catalog.store';

/**
 * Receive Books view to register book stocks.
 * @author Carlos Céspedes
 */
@Component({
  selector: 'app-book-stock-form',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatSelectModule, TranslatePipe],
  templateUrl: './book-stock-form.html',
  styleUrl: './book-stock-form.css',
})
export class BookStockForm {
  protected bookstoresStore = inject(BookstoresStore);
  protected catalogStore = inject(CatalogStore);

  form = new FormGroup({
    specialty: new FormControl('', Validators.required),
    bookKey: new FormControl('', Validators.required),
  });

  onSpecialtyChange(specialty: string): void {
    this.form.patchValue({ bookKey: '' });
    this.catalogStore.loadBooksBySpecialty(specialty);
  }
}
