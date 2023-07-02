import React from 'react'

//images
import logo from '../../assets/logo.png';

function Header() {
  return (
    <div className='header'>
        <img
          src={ logo }
          alt="logo"
          className='logo'
        />
        <h1 className='shop__gun'>ShopGun</h1>
    </div>
  )
}

export default Header
