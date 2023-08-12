//style
import './ItemDetail.css';

//components - hook
import React, { useContext, useState } from 'react';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../context/CartContext';


const ItemDetail = ({item}) => {

    const { cart, handleAddCart, getQuantityProduct } = useContext(CartContext);
    console.log(cart);

    const [stock] = useState(item.available);

    const [count, setCount] = useState(1);

    const handleSubtract = () => {
        count > 1 && setCount(count - 1);
    };

    const handlePlus = () => {
        count < item.available && setCount(count + 1);
    };

  return (
    <main>
      <div className='container__main__search'>
        <p><Breadcrumbs item={item}/></p>
      </div>
        <div className='container__itemDetail'>
            <div className='itemDetail'>
                <div className='container__img__itemDetail'>
                    <img src={item.image} alt={item.title} className='img__guns' />
                </div>
                <div className='container__details__itemDetail'>
                    <h2 className='guns__title'>{item.title}</h2>
                    <h3 className='guns__price'>$ {item.price}</h3>
                    {((stock - getQuantityProduct(item.id)) > 0) ? <h4 className='guns__stock stock_'>{item.available - getQuantityProduct(item.id)} Disponibles</h4> : <h4 className='guns__stock not-stock_'>No hay stock</h4>}

                    <ItemCount 
                        count={count}
                        handlePlus={handlePlus}
                        handleSubtract={handleSubtract}
                        handleAddCart={()=> {handleAddCart(item, count)} }
                    />
                </div>
            </div>

            <div className='container__descriptions'>
                <h3 className='description__'>Descripción</h3>
                <div>
                    
                </div>
                <p className='descript'>{item.description}</p>
                <p className='descript__details'><u>Clase</u>: {item.class}</p>
                <p className='descript__details'><u>Marca</u>: {item.brand}</p>
                <p className='descript__details'><u>Modelo</u>: {item.model}</p>
                <p className='descript__details'><u>Calibre</u>: {item.caliber}</p>
                <p className='descript__details'><u>Peso</u>: {item.weight}</p>
                <p className='descript__details'><u>Cargador</u>: {item.charger}</p>
                <p className='descript__details'><u>Acción</u>: {item.action}</p>
                <p className='descript__details'><u>Seguridad</u>: {item.security}</p>
                <p className='descript__details'><u>Cañón</u>: {item.canyon}</p>
                <p className='descript__details'><u>Funcionalidad</u>: {item.funcionality}</p>
            </div>
        </div>
    </main>
  )
}

export default ItemDetail;
