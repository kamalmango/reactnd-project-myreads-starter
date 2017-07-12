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

  render() {
    return (
      <div className='app'>
        <Route exact path='/' render={() => (
        	<Home 
        		books={this.state.books}
        	/>
        )} />
        <Route exact path='/search' component={Search} />
      </div>
    )
  }
}

export default BooksApp
