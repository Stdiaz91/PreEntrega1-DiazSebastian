//style
import './ItemCount.css';

//components
import React, { useState } from 'react'

const ItemCount = ({item}) => {
    const [count, setCount] = useState(1);

    const handleSubtract = () => {
        count > 1 && setCount(count - 1);
    };

    const handlePlus = () => {
        count < item.available && setCount(count + 1);
    };

  return (
    <div className='container__buttons__shop'>
        <div className='buttons'>
            <button className='subtract' onClick={handleSubtract}>-</button>
            <div className='container__count'>
                <p className='count'>{count}</p>
            </div>
            <button className='plus' onClick={handlePlus}>+</button>
        </div>
        <div className='shop'>
            <button className='buy__now__'>AGREGAR AL CARRITO</button>
        </div>

        <div className='shop'>
            <button className='buy__now__'>COMPRAR AHORA</button>
        </div>
    </div>

  )
}

export default ItemCount
