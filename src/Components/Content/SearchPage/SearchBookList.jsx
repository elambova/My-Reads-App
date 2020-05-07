import React, { Component } from "react";
import PropTypes from "prop-types";
import Book from "../MainPage/Book";

export default class SearchBookList extends Component {
  updateBook = (book, shelf) => {
    if (this.props.updateBookShelf) {
      this.props.updateBookShelf(book, shelf);
    }
  };

  render() {
    const { books } = this.props;

    return (
      <div className="search-books-results">
        <p className="error">Invalid search. Please try again.</p>
        <ol className="books-grid">
          {books.map((book, index) => (
            <li key={index}>
              <Book
                books={book}
                onUpdateBookShelf={(books, shelf) => {
                  this.updateBook(books, shelf);
                  alert(`Book is add to ${shelf} shelf.`);
                }}
              />
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

SearchBookList.propTypes = {
  books: PropTypes.array.isRequired,
};
