/**
 * Total copies of one book in a bookstore.
 * @author Carlos Céspedes
 */
export class BookInventoryItem {
  constructor(
    public bookKey: string,
    public bookTitle: string,
    public copies: number,
  ) {}
}
