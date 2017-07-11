import React, { Component } from 'react'
import Book from '../../atoms/Book'
import './style.css'

class Bookshelf extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
          <ol className="books-grid">
          	<li>
          	  <Book />
          	</li>
          </ol>
      </div>
    )
  }
}

export default Bookshelf
