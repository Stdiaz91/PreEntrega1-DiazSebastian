//components
import React from 'react';
import './BannerContact.css';

//image
import bannerContact from '../../assets/banner__contact.jpg';

function BannerContact() {
  return (
    <div className='banner__contact'>
      <img src={bannerContact} alt="Banner-Contact" className='banner__contact__img'/>
      <div className='container__contact'>
        <p>Para cualquier consulta ingresá <a href="#">AQUÍ</a></p>
      </div>
    </div>
  )
}

export default BannerContact
