import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Book extends Component {
  static propTypes = {
    books: PropTypes.object.isRequired,
  };

  render() {
    const { books, onUpdateBookShelf } = this.props;
    const coverUrl =
      books.imageLinks === undefined
        ? "http://books.google.com/books/content?id=1yx1tgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        : books.imageLinks.thumbnail || books.imageLinks.smallThumbnail;
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${coverUrl}"`,
            }}
          />
          <div className="book-shelf-changer">
            <select
              onChange={(event) => onUpdateBookShelf(books, event.target.value)}
              value={books.shelf ? books.shelf : "none"}
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{books.title}</div>
        <div className="book-authors">
          {books.authors ? books.authors.join(", ") : "Unknown"}
        </div>
      </div>
    );
  }
}
