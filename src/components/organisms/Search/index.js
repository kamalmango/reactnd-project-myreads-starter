import React, { Component } from 'react'
import SearchBar from '../../atoms/SearchBar'
import ListBooks from '../../molecules/ListBooks'
import './style.css'

class Search extends Component {

  render() {
    const { updateBookshelf, search, searchBooks } = this.props
    return (
      <div className="search-books">
        <SearchBar search={search} />
        <div className="search-books-results">
          <ListBooks books={searchBooks} updateBookshelf={updateBookshelf} />
        </div>
      </div>
    )
  }
}

export default Search