# My Reads App Project

This project is part of Udacity React Nanodegree Program. In it except React is used Udacity BooksAPI from which we receive the necessary information.

## Introduction

In this project are used:

- HTML
- CSS
- VanillaJS
- NodeJS
- React

For create is using `create-react-app` (more information can find in [Create React App](https://github.com/facebookincubator/create-react-app)).

### Getting started

To view and test the project need to download in .zip format or clone it repository.
The next step is to navigate (in the terminal) to the corresponding directory in which it is located and install depedencies with

```
npm install
```

To run app need to run

```
npm start
```

and browse the books, change the shelves, search and add more books.

### File structure

```bash
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── APIConnect
    │   ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── Components
    │   ├── Header
    │   │   ├── Header.js # In this Component is Header  jsx file on Main page. Just a title of document.
    │   ├── Content
    │   │   ├── MainPage
    │   │   │   ├── Bookshelf.js # In this Component is Bookshelf jsx file on Main page. Contain ListBook Component.
    │   │   │   ├── ListBook.js # In this Component is ListaBook jsx file on Main page. Contain Book Component.
    │   │   │   ├── Book.js # In this Component is Book jsx file on Main page. Display data for every book.
    │   │   ├── SearchPage
    │   │   │   ├── SearchBook.js # In this Component is SearchBook jsx file on Search page. Contain SearchBookList Component
    │   │   │   ├── SearchBookList.js # In this Component is SearchBookList jsx file on Search page. Contain Book Component.
    │   ├── Footer
    │   │   ├── Footer.js # In this Component is Footer  jsx file on Main page. Just button who navigate to /search page.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

To be semantically correct, all components are separated in a folder, the main ones being Heather, Content and Foother. only one file is placed in the header and footer. the content folder contains 2 new folders, which are respectively for the main page and for the book search page (in each folder there are several files (components), which are to be semantically structured).

## Backend Server

He is provide from Udacity React Nanodegree Program. Can be viewed in APIConnect folder, file name is [`BooksAPI.js`](src/APIConnest/BooksAPI.js). The file itself contains the methods:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.
