import React from 'react'
import logo from './assets/images/logo.svg'
import {Link} from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div>
    <div className="container">
   <header className="navbar">
    <img src={logo} alt="news logo" className="logo" />
    <nav className="links">
      <ul>
        <li className="link">
          <Link to=""> Home</Link>
        </li>

        <li className="link">
          <Link to="#">Popular</Link>
        </li>

        <li className="link">
          <Link to="#">Trending</Link>
        </li>
        <li className="link">
          <Link to="/signup">Sign up</Link>
        </li>
    
      </ul>
    </nav>
  </header>
</div>

    </div>
  )
}

export default Header