import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <nav className="flex gap-4 p-4 border-b">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/dashboard">Dashboard</Link>
    </nav>
  )
}

export default Navbar