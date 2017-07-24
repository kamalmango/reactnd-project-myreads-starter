import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const AddButton = props => (
  <div className="open-search">
    <Link to='/search' onClick={props.clearSearch}>Add a book</Link>
  </div>
)

export default AddButton