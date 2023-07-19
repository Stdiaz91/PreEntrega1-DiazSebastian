//style
import './CartWidget.css';

//components
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

function CartWidget() {

  const navCart = useNavigate();

  return (
    <li className='item__menu cart'>
      <div className='container__cart' onClick={()=> navCart('/shop')}>
        <Link to='/shop' className='cart'><i className="bi bi-cart"></i></Link>
        <div className='container__quant'>
          <span className='quantities'>0</span>
        </div>
      </div>
    </li>
  )
}

export default CartWidget;
