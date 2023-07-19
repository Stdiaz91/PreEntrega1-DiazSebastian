//styles
import './Header.css';

//components
import React from 'react';
import { useNavigate } from 'react-router-dom';

//images
import logo from '../../assets/logo.png';

function Header() {
  const navigate = useNavigate();

  return (
    <div className='header' onClick={()=> navigate("/")}>
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
