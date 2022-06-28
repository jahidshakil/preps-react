import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
      <div>
          <ul className='nav'>
              <li >
                  <Link to='/'>Home Page</Link>
              </li>
              <li >
                  <Link to='/cart'>Cart</Link>
              </li>
          </ul>
    </div>
  )
}

export default Header