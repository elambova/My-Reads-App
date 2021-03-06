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

  async componentDidMount() {
    const books = await BooksAPI.getAll();
    this.setState({ books });
  }

  updateBookShelf = async (book, shelf) => {
    await BooksAPI.update(book, shelf);

    book.shelf = shelf;

    this.setState((state) => ({
      books: state.books.filter((b) => b.id !== book.id).concat(book),
    }));
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
                    updateBookShelf={this.updateBookShelf}
                    bookshelfName="currentlyReading"
                    books={books}
                  />
                  <Bookshelf
                    bookshelfTitle="Want to Read"
                    updateBookShelf={this.updateBookShelf}
                    bookshelfName="wantToRead"
                    books={books}
                  />
                  <Bookshelf
                    bookshelfTitle="Read"
                    updateBookShelf={this.updateBookShelf}
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
