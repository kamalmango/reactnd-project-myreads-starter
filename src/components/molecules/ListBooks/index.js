import React from 'react'
import Book from '../../atoms/Book'
import './style.css'

const ListBooks = props => (
  <ol className="books-grid">
    {props.books.map(book => (
      <li key={book.id}>
        <Book 
          title={book.title} 
          author={book.authors} 
          image={book.imageLinks.thumbnail} 
          updateBookshelf={props.updateBookshelf} 
          id={book.id}
          shelf={book.shelf}
        />
      </li>
    ))}
  </ol>
)

export default ListBooks
