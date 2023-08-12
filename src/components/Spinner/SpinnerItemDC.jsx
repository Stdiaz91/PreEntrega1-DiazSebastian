//style
import './Spinner.css';

//components
import React from 'react';

const Spinner = () => {
  return (
    <div className='container__spinnerItemDC'>
      <div className="lds-ring__"><div></div><div></div><div></div><div></div></div>
      <div className='load__text__'>Cargando...</div>
    </div>
  )
};

export default Spinner;