import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <main>
        <header>
          <nav>
            <ul>
              <li className="home">
                <Link to="/">$5 and Dine$</Link>
              </li>
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
        </header>
      </main>
    </>
  )
}
export default Header
