import React from 'react'
import ListBooks from '../../molecules/ListBooks'
import './style.css'

const Bookshelf = props => (
	<div className="bookshelf">
    <h2 className="bookshelf-title">{props.title}</h2>
    <div className="bookshelf-books">
    	<ListBooks books={props.books} updateBookshelf={props.updateBookshelf} />
    </div>
  </div>
)

export default Bookshelf
