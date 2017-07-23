import React, { Component } from 'react'
import Book from '../../atoms/Book'
import './style.css'

class ListBooks extends Component {
  render() {
    const { books, updateBookshelf } = this.props
    return (
      <ol className="books-grid">
        {books.map(book => (
          <li key={book.id}>
            <Book 
              title={book.title} 
              author={book.authors} 
              image={book.imageLinks.thumbnail} 
              updateBookshelf={updateBookshelf} 
              id={book.id}
              shelf={book.shelf}
            />
          </li>
        ))}
      </ol>
    )
  }
}

export default ListBooks