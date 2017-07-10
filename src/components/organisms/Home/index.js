import React, { Component } from 'react'
import Header from '../../atoms/Header'
import AddButton from '../../atoms/AddButton'
import './style.css'

class Home extends Component {
  render() {
    return (
      <div className="list-books">
        <Header />
        <AddButton />
      </div>
    )
  }
}

export default Home