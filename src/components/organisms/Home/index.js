import React, { Component } from 'react'
import Header from '../../atoms/Header'
import AddButton from '../../atoms/AddButton'
import Bookshelf from '../../molecules/Bookshelf'
import './style.css'

class Home extends Component {
  render() {
    return (
      <div className="list-books">
        <Header />
          <div className='list-books-content'>
            <div>
              <Bookshelf title='Currently Reading' />
              <Bookshelf title='Wanted to Read' />
              <Bookshelf title='Read' />
            </div>
          </div>
        <AddButton />
      </div>
    )
  }
}

export default Home