import React, { Component } from "react";
import PropTypes from "prop-types";
import ListBooks from "./ListBooks";

export class Bookshelf extends Component {
  static propTypes = {
    bookshelfTitle: PropTypes.string.isRequired,
    bookshelfName: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
  };

  render() {
    const {
      bookshelfTitle,
      bookshelfName,
      books,
      updateBookShelf,
    } = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{bookshelfTitle}</h2>
        <ListBooks
          booksList={books}
          updateBookShelf={updateBookShelf}
          bookshelfName={bookshelfName}
        />
      </div>
    );
  }
}

export default Bookshelf;
