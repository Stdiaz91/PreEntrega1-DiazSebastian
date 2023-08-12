//style
import './Spinner.css';

//components
import React from 'react';

const Spinner = () => {
  return (
    <div className='container__spinner'>
      <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
      <div className='load__text'>Cargando...</div>
    </div>
  )
};

export default Spinner;
