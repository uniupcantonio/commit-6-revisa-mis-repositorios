import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TranslatePipe } from '@ngx-translate/core';
import { BookstoreInventory } from '../../../domain/model/bookstore-inventory';

/**
 * Card with the inventory summary of one bookstore.
 * @author Carlos Céspedes
 */
@Component({
  selector: 'app-bookstore-summary',
  imports: [MatCardModule, TranslatePipe],
  templateUrl: './bookstore-summary.html',
  styleUrl: './bookstore-summary.css',
})
export class BookstoreSummary {
  readonly bookstoreInventory = input.required<BookstoreInventory>();
}
