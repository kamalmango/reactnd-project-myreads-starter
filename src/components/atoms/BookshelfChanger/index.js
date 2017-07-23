import React, { Component } from 'react'
import './style.css'

class BookshelfChanger extends Component {
	handleChange = (e) => {
		this.props.updateBookshelf(this.props.id, e.target.value)
	}

	render() {
		return (
			<div className="book-shelf-changer">
			  <select value={this.props.shelf} onChange={this.handleChange}>
			    <option value="none" disabled>Move to...</option>
			    <option value="currentlyReading">Currently Reading</option>
			    <option value="wantToRead">Want to Read</option>
			    <option value="read">Read</option>
			    <option value="none">None</option>
			  </select>
			</div>
		)
	}
}

export default BookshelfChanger