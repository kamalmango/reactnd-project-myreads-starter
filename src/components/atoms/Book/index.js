import React from 'react'
import BookshelfChanger from '../BookshelfChanger'
import './style.css'

const Book = props => (
	<div className="book">
    <div className="book-top">
      <div className="book-cover" style={{ width: 128, height: 174, backgroundImage: `url("${props.book.imageLinks && props.book.imageLinks.thumbnail}")` }}></div>
      <BookshelfChanger updateBookshelf={props.updateBookshelf} book={props.book} />
    </div>
    <div className="book-title">{props.book.title}</div>
    <div className="book-authors">{props.book.author}</div>
	</div>
)

export default Book
