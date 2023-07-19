import React from 'react';
import './Brands.css';

import akkar from '../../assets/logos/Akkar-removebg-preview.png';
import bersa from '../../assets/logos/Bersa_logo-removebg-preview.png';
import colt from '../../assets/logos/Colt_logo-removebg-preview.png';
import glock from '../../assets/logos/Glock_logo.svg-removebg-preview.png';
import hatsan from '../../assets/logos/hatsan-ariguns-logo-CCDC2EB219-seeklogo.com-removebg-preview.png';
import mossberg from '../../assets/logos/Mossberg-Logo-removebg-preview.png';
import ruger from '../../assets/logos/Ruger-Logo-removebg-preview.png';
import wilson from '../../assets/logos/SiHYOZ8n_400x400-removebg-preview.png';
import smith from '../../assets/logos/SmithWesson-logo-removebg-preview.png';
import taurus from '../../assets/logos/Taurus_Logo-removebg-preview.png';
import winchester from '../../assets/logos/Winchester_logo2-removebg-preview.png';
import marlin from '../../assets/logos/png-transparent-marlin-firearms-lever-action-308-marlin-express-marlin-model-1894-others-blue-text-public-relations-removebg-preview.png';


function Brands() {
  return (
    <div className='brands'>
        <h2 className='brands__title'>Trabajamos las mejores marcas del mercado</h2>
        <div className='container__brands'>
            <div className='row__a'>
                <img src={akkar} alt="akkar" className='brand__img akkar'/>
                <img src={bersa} alt="bersa" className='brand__img'/>
                <img src={colt} alt="colt" className='brand__img'/>
            </div>
            <div className='row__b'>
                <img src={glock} alt="glock" className='brand__img'/>
                <img src={hatsan} alt="hatsan" className='brand__img'/>
                <img src={mossberg} alt="mossberg" className='brand__img'/>
            </div>
            <div className='row__c'>
                <img src={ruger} alt="ruger" className='brand__img'/>
                <img src={wilson} alt="wilson-combat" className='brand__img'/>
                <img src={smith} alt="smith-wesson" className='brand__img'/>
            </div>
            <div className='row__d'>
                <img src={taurus} alt="taurus" className='brand__img'/>
                <img src={winchester} alt="winchester" className='brand__img winchester'/>
                <img src={marlin} alt="marlin" className='brand__img'/>
            </div>
        </div>
      
    </div>
  )
}

export default Brands
