import React, { Component } from 'react'
import './style.css'

class BookshelfChanger extends Component {
	handleChange = (e) => {
		console.log('hellooooo')
		if (this.props.updateBookshelf) {
			//this.props.updateBookshelf(e.target.value, )
			console.log('eeeeee ', e.target.value)
		}
	}

	render() {
		return (
			<div className="book-shelf-changer">
			  <select onChange={this.handleChange}>
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