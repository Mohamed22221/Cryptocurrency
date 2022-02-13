import React from 'react'
import './NavBarCoin.css'
import {Link} from 'react-router-dom'
const NavBarCoin = () => {
  return (
    
      <div className='container'>
        <div className='nav-coins'>
            <span>Coin</span>
            <span className='gold'>Search</span>
            <span><i className="fa-solid fa-coins"></i></span>
        </div>
      </div>
     
  )
}

export default NavBarCoin