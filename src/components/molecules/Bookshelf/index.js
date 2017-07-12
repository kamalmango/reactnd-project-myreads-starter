import React, { Component } from 'react'
import Book from '../../atoms/Book'
import './style.css'

class Bookshelf extends Component {
  render() {
  	console.log('books ', this.props.books)
  	const { books } = this.props
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
          <ol className="books-grid">
          	{books.map(book => (
          		<li key={book.title}>
          	  	<Book title={book.title} author={book.authors[0]} image={book.imageLinks.thumbnail} />
          		</li>
          	))}
          </ol>
      </div>
    )
  }
}

export default Bookshelf
