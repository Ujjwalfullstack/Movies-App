import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">Movies Versa</div>
      <div className="menus">
        <div className="menu">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/watchlist'>Watchlist</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
        </div>
      </div>
    </div>
  )
}

export default Navbar
