import React from 'react'
import SearchBar from '../../atoms/SearchBar'
import ListBooks from '../../molecules/ListBooks'
import './style.css'

const Search = props => (
  <div className="search-books">
    <SearchBar search={props.search} />
    <div className="search-books-results">
      <ListBooks books={props.searchBooks} updateBookshelf={props.updateBookshelf} />
    </div>
  </div>
)


export default Search
