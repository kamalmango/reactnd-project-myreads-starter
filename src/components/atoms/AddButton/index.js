import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const AddButton = () => (
  <div className="open-search">
    <Link to='/search'>Add a book</Link>
  </div>
)

export default AddButton