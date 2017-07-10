import React, { Component } from 'react'
import Header from '../../atoms/Header'
import './style.css'

class Home extends Component {
  render() {
    return (
      <div className="list-books">
        <Header />
      </div>
    )
  }
}

export default Home