import React, { Component } from "react";
import PropTypes from "prop-types";
import Book from "./Book";

export default class ListBooks extends Component {
  static propTypes = {
    bookshelfName: PropTypes.string.isRequired,
    booksList: PropTypes.array.isRequired,
  };

  updateBook = (book, shelf) => {
    if (this.props.updateBookShelf) {
      this.props.updateBookShelf(book, shelf);
    }
  };

  render() {
    const { bookshelfName, booksList } = this.props;
    return (
      <div className="bookshelf-books">
        <ol className="books-grid">
          {booksList
            .filter((book) => book.shelf === bookshelfName)
            .map((book, index) => (
              <li key={index}>
                <Book
                  books={book}
                  onUpdateBookShelf={(books, shelf) => {
                    this.updateBook(books, shelf);
                  }}
                />
              </li>
            ))}
        </ol>
      </div>
    );
  }
}
