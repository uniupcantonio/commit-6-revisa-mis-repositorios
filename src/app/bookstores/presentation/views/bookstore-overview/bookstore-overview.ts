import { Component, computed, inject } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatError } from '@angular/material/form-field';
import { TranslatePipe } from '@ngx-translate/core';
import { BookstoresStore } from '../../../application/bookstores.store';
import { InventoryStore } from '../../../../inventory/application/inventory.store';
import { BookstoreInventory } from '../../../domain/model/bookstore-inventory';
import { BookstoreSummary } from '../../components/bookstore-summary/bookstore-summary';

/**
 * Bookstore Overview view with the inventory of each bookstore.
 * @author Carlos Céspedes
 */
@Component({
  selector: 'app-bookstore-overview',
  imports: [MatGridListModule, MatError, TranslatePipe, BookstoreSummary],
  templateUrl: './bookstore-overview.html',
  styleUrl: './bookstore-overview.css',
})
export class BookstoreOverview {
  protected bookstoresStore = inject(BookstoresStore);
  protected inventoryStore = inject(InventoryStore);

  protected bookstoreInventories = computed(() =>
    this.bookstoresStore
      .bookstores()
      .map(
        (bookstore) =>
          new BookstoreInventory(
            bookstore,
            this.inventoryStore.getBookStocksByBookstoreId(bookstore.id),
          ),
      ),
  );
}
