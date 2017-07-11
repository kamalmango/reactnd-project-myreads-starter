import React, { Component } from 'react'
import './style.css'

class Bookshelf extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
          <ol className="books-grid">
          </ol>
      </div>
    )
  }
}

export default Bookshelf
