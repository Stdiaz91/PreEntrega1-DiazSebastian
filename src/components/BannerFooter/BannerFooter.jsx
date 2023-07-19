import React from 'react';
import '../BannerFooter/BannerFooter.css';

//image
import logo from '../../assets/logo.png';

function BannerFooter() {
  return (
    <div className='banner__footer'>
        <div className='section__a'>
            <img src={logo} alt="logo" className='logo__footer'/>
            <h2 className='sg'>ShopGun</h2>
        </div>
        <div className='section__b'><p>32 AÑOS DE TRAYECTORIA NOS AVALAN, LA CALIDAD NOS DISTINGUE</p></div>
    </div>
  )
}

export default BannerFooter
