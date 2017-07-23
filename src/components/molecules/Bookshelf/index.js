import React, { Component } from 'react'
import ListBooks from '../../molecules/ListBooks'
import './style.css'

class Bookshelf extends Component {
  render() {
  	const { books, updateBookshelf } = this.props
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <ListBooks books={books} updateBookshelf={updateBookshelf} />
      </div>
    )
  }
}

export default Bookshelf
