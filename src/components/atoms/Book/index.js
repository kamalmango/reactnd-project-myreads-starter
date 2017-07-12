import React, { Component } from 'react'
import BookshelfChanger from '../BookshelfChanger'
import './style.css'

class Book extends Component {
  render() {
    return (
      <div className="book">
	    <div className="book-top">
	      <div className="book-cover" style={{ width: 128, height: 174, backgroundImage: `url("${this.props.image}")` }}></div>
	      <BookshelfChanger />
	    </div>
	    <div className="book-title">{this.props.title}</div>
	    <div className="book-authors">{this.props.author}</div>
	  </div>
    )
  }
}

export default Book



