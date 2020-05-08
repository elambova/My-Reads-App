import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class OpenSearchWindow extends Component {
  render() {
    return (
      <div className="open-search">
        <Link to="/search" className="open-search-button">
          Add a book
        </Link>
        
      </div>
    );
  }
}
