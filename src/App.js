import React from 'react'
import { Route } from 'react-router-dom'
import Home from './components/organisms/Home'
import Search from './components/organisms/Search'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
	state = {
    books: [],
    searchBooks: []
	}

	componentDidMount() {
		BooksAPI.getAll().then(books => {
      this.setState({ books })
		})
	}

	updateBookshelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf
      this.setState(state => ({
        books: state.books.filter(item => item.id !== book.id).concat([book])
      }))
    })
	}

  clearSearch = () => {
    this.setState({ searchBooks: [] })
  }

  search = (query) => {
    if (query.length) {    
      BooksAPI.search(query, 20).then(searchBooks => {
        if (typeof searchBooks === 'object') {
          this.clearSearch()
        }    
        if (searchBooks && Array.isArray(searchBooks)) { 
          searchBooks.forEach(searchBook => {
            this.state.books.forEach(book => {
              if (searchBook.id === book.id) {
                searchBook.shelf = book.shelf
              }
            })
          })
          this.setState({ searchBooks })
        }
      })
    } else {
      this.clearSearch()
    }
  }

  render() {
    return (
      <div className='app'>
        <Route exact path='/' render={() => (
        	<Home 
        		updateBookshelf={this.updateBookshelf}
            clearSearch={this.clearSearch}
        		books={this.state.books}
        	/>
        )} />
        <Route exact path='/search' render={() => (
          <Search 
            updateBookshelf={this.updateBookshelf}
            search={this.search}
            searchBooks={this.state.searchBooks}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
