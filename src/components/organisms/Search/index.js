import React, { Component } from 'react'
import SearchBar from '../../atoms/SearchBar'
import './style.css'

class Search extends Component {
  render() {
    return (
      <div className="search-books">
        <SearchBar />
      </div>
    )
  }
}

export default Search