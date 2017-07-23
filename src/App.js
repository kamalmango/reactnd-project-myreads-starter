import React from 'react'
import { Route } from 'react-router-dom'
import Home from './components/organisms/Home'
import Search from './components/organisms/Search'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
	state = {
    books: []
	}

	componentDidMount() {
		BooksAPI.getAll().then(books => {
      this.setState({ books })
		})
	}

	updateBookshelf = (bookId, shelf) => {
    this.setState(state => {
      state.books.forEach(book => {
        if (book.id === bookId) {
          book.shelf = shelf
        }
      })
    })

    const bookObj = {id: bookId}
		BooksAPI.update(bookObj, shelf)
	}

  render() {
    console.log('state ', this.state)
    return (
      <div className='app'>
        <Route exact path='/' render={() => (
        	<Home 
        		updateBookshelf={this.updateBookshelf}
        		books={this.state.books}
        	/>
        )} />
        <Route exact path='/search' component={Search} />
      </div>
    )
  }
}

export default BooksApp
