import React from 'react'
import Header from '../../atoms/Header'
import AddButton from '../../atoms/AddButton'
import Bookshelf from '../../molecules/Bookshelf'
import './style.css'

const Home = props => {
  const { books, updateBookshelf } = props
  const currentlyReading = books.filter(book => book.shelf === 'currentlyReading')
  const wantToRead = books.filter(book => book.shelf === 'wantToRead')
  const read = books.filter(book => book.shelf === 'read')

  return (
    <div className="list-books">
      <Header />
        <div className='list-books-content'>
          <div>
            <Bookshelf title='Currently Reading' books={currentlyReading} updateBookshelf={updateBookshelf} />
            <Bookshelf title='Want to Read' books={wantToRead} updateBookshelf={updateBookshelf} />
            <Bookshelf title='Read' books={read} updateBookshelf={updateBookshelf} />
          </div>
        </div>
      <AddButton />
    </div>
  )
}


export default Home
