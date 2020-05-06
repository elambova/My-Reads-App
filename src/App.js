import React from "react";
import * as BooksAPI from "./APIConnect/BooksAPI";
import "./App.css";
import Header from "./Components/Header/Header";
import Bookshelf from "./Components/Content/MainPage/Bookshelf";
import SearchBook from "./Components/Content/SearchPage/SearchBook";
import { Route } from "react-router-dom";
import OpenSearchWindow from "./Components/Footer/OpenSearchWindow";

class BooksApp extends React.Component {
  state = {
    books: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({ books }));
    });
  }

  updateBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then((response) => {
      BooksAPI.getAll().then((books) => {
        this.setState(() => ({ books }));
      });
    });
  };

  render() {
    const { books } = this.state;
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books">
              <Header />
              <div className="list-books-content">
                <div>
                  <Bookshelf
                    bookshelfTitle="Currently Reading"
                    updateBookShelf={(book, shelf) => {
                      this.updateBookShelf(book, shelf);
                    }}
                    bookshelfName="currentlyReading"
                    books={books}
                  />
                  <Bookshelf
                    bookshelfTitle="Want to Read"
                    updateBookShelf={(book, shelf) => {
                      this.updateBookShelf(book, shelf);
                    }}
                    bookshelfName="wantToRead"
                    books={books}
                  />
                  <Bookshelf
                    bookshelfTitle="Read"
                    updateBookShelf={(book, shelf) => {
                      this.updateBookShelf(book, shelf);
                    }}
                    bookshelfName="read"
                    books={books}
                  />
                </div>
                <OpenSearchWindow />
              </div>
            </div>
          )}
        />
        <Route
          path="/search"
          render={() => (
            <SearchBook books={books} updateBookShelf={this.updateBookShelf} />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
