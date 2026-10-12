import { BookStock } from '../../../inventory/domain/model/book-stock.entity';
import { Bookstore } from './bookstore.entity';
import { BookInventoryItem } from './book-inventory-item';

/**
 * Inventory of a bookstore built from its book stocks.
 * @author Carlos Céspedes
 */
export class BookstoreInventory {
  readonly books: BookInventoryItem[] = [];

  constructor(
    public bookstore: Bookstore,
    bookStocks: BookStock[],
  ) {
    for (const bookStock of bookStocks) {
      const book = this.books.find((item) => item.bookKey === bookStock.bookKey);
      if (book) {
        book.copies += bookStock.copies;
      } else {
        this.books.push(
          new BookInventoryItem(bookStock.bookKey, bookStock.bookTitle, bookStock.copies),
        );
      }
    }
  }

  get availableTitles(): number {
    return this.books.length;
  }

  get replenishmentRequired(): number {
    return this.books.filter((book) => book.copies < this.bookstore.minimumCopies).length;
  }
}
