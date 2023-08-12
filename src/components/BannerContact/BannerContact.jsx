//style
import './BannerContact.css';

//components
import React from 'react';

//hook
import { Link } from 'react-router-dom';

//image
import bannerContact from '../../assets/banner__contact.jpg';

function BannerContact() {
  return (
    <div className='banner__contact'>
      <img src={bannerContact} alt="Banner-Contact" className='banner__contact__img'/>
      <div className='container__contact'>
        <p>Para cualquier consulta ingresá <Link to="/contacto">AQUÍ</Link></p>
      </div>
    </div>
  )
}

export default BannerContact
