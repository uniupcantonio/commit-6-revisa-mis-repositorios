/**
 * Book offered by the Open Library catalog.
 * @author Carlos Céspedes
 */
export class Book {
  #key: string;
  #title: string;
  #authorName: string;

  constructor(props: { key: string; title: string; authorName: string }) {
    this.#key = props.key;
    this.#title = props.title;
    this.#authorName = props.authorName;
  }

  get key(): string {
    return this.#key;
  }

  get title(): string {
    return this.#title;
  }

  get authorName(): string {
    return this.#authorName;
  }
}
