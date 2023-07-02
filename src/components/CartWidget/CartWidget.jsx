//components
import React from 'react';


function CartWidget() {
  return (
    <li className='item__menu cart'>
      <button className='cart'><i className="bi bi-cart"></i><span className='quantities'>0</span></button>
    </li>
  )
}

export default CartWidget
