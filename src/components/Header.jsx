import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <main>
        <nav>
          <header>
            <Link to="/">$5 and Dine$</Link>
          </header>
          <ul>
            <li>
              <input className="search-bar" type="search" />
            </li>
            <li className="nav">
              <Link to="/1">Search</Link>
            </li>
            <li className="nav">
              <Link to="/1">Daily Specials</Link>
            </li>
            <li className="nav">
              <Link to="/2">Login</Link>
            </li>
          </ul>
        </nav>
      </main>
    </>
  )
}
export default Header
