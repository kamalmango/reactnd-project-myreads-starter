import React, { Component } from 'react'
import './style.css'

class BookshelfChanger extends Component {
	state = {
		value: 'currentlyReading'
	}

	handleChange = (e) => {
		console.log('state before ', this.state.value)
		this.setState({value: e.target.value})
		console.log('state after ', this.state.value)
		//if (this.props.updateBookshelf) {
			//this.props.updateBookshelf(this.props.id, e.target.value)
			//console.log('state before ', this.state.value)
			//this.setState({value: e.target.value})
			//console.log('state after ', this.state.value)
		//}
	}

	render() {
		return (
			<div className="book-shelf-changer">
			  <select value={this.state.value} onChange={this.handleChange}>
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