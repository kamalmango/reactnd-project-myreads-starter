import React from 'react'
import BookshelfChanger from '../BookshelfChanger'
import './style.css'

const Book = props => (
	<div className="book">
    <div className="book-top">
      <div className="book-cover" style={{ width: 128, height: 174, backgroundImage: `url("${props.image}")` }}></div>
      <BookshelfChanger updateBookshelf={props.updateBookshelf} id={props.id} shelf={props.shelf} />
    </div>
    <div className="book-title">{props.title}</div>
    <div className="book-authors">{props.author}</div>
	</div>
)

export default Book



