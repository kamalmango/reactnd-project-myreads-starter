import React from 'react'
import { Route } from 'react-router-dom'
import Home from './components/organisms/Home'
import Search from './components/organisms/Search'

class BooksApp extends React.Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/search' component={Search} />
      </div>
    )
  }
}

export default BooksApp
