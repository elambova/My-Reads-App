import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import SearchBookList from "./SearchBookList";
import * as BooksAPI from "../../../APIConnect/BooksAPI";

export default class SearchBook extends Component {
  static propTypes = {
    updateBookShelf: PropTypes.func.isRequired,
  };

  state = {
    query: "",
    result: [],
  };

  updateQuery = (query) => {
    this.setState({ query: query });
    this.searchBook(query);
  };

  searchBook = (query) => {
    query === "" ? this.setState({ result: [] }) : this.searchResult(query);
  };

  searchResult = (query) => {
    if (query) {
      BooksAPI.search(query).then((result) => {
        if (result.error) {
          this.setState({ result: [] });
        } else {
          this.setState({ result: result });
        }
      });
    } else {
      this.setState({ result: [] });
    }
  };

  render() {
    const { query, result } = this.state;
    const { updateBookShelf } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              className="search-contacts"
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <SearchBookList updateBookShelf={updateBookShelf} books={result} />
      </div>
    );
  }
}
