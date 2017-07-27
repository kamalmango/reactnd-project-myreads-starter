import React from 'react'
import Book from '../../atoms/Book'
import './style.css'

const ListBooks = props => (
  <ol className="books-grid">
    {props.books.map(book => (
      <li key={book.id}>
        <Book 
          book={book}
          updateBookshelf={props.updateBookshelf} 
        />
      </li>
    ))}
  </ol>
)

export default ListBooks
