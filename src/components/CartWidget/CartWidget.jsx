//style
import './CartWidget.css';

//components
import React, { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

function CartWidget() {

  const navCart = useNavigate();

  const { quantityInTheCart } = useContext(CartContext);

  return (
    <li className='item__menu_ cart'>
      <div className='container__cart' onClick={()=> navCart('/shop')}>
        <Link to='/shop' className='cart'><i className="bi bi-cart"></i></Link>
        <div className='container__quant'>
          <span className={quantityInTheCart() > 0  ? 'quantities__full' : 'quantities__empty'}>{quantityInTheCart()}</span>
        </div>
      </div>
    </li>
  )
}

export default CartWidget;
