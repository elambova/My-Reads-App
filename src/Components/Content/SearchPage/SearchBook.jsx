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

  searchResult = (query) => {
    this.setState({ query: query });
    if (query.trim() === "") {
      this.setState({ result: [] });
    } else {
      BooksAPI.search(query).then((result) => {
        if (result.error) {
          this.setState({ result: [] });
          document.querySelector(".error").style.display = "block";
        } else {
          document.querySelector(".error").style.display = "none";
          this.setState({ result: result });
        }
      });
    }
  };

  render() {
    const { query, result } = this.state;
    const { updateBookShelf } = this.props;

    console.log(result);
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
              onChange={(event) => this.searchResult(event.target.value)}
            />
          </div>
        </div>
        <SearchBookList updateBookShelf={updateBookShelf} books={result} />
      </div>
    );
  }
}
