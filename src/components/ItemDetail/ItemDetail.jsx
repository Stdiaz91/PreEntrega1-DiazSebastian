//style
import './ItemDetail.css';

//components - hook
import React, { useState } from 'react';
import Search from '../Search/Search';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({item}) => {
    const [stock] = useState(item.stock);

  return (
    <main>
      <div className='container__main__search'>
        <p><Breadcrumbs item={item}/></p>< Search /> 
      </div>
        <div className='container__itemDetail'>
            <div className='itemDetail'>
                <div className='container__img__itemDetail'>
                    <img src={item.image} alt={item.title} className='img__guns' />
                </div>
                <div className='container__details__itemDetail'>
                    <h2 className='guns__title'>{item.title}</h2>
                    <h3 className='guns__price'>$ {item.price}</h3>
                    {stock ? <h4 className='guns__stock stock_'>{item.available} Disponibles</h4> : <h4 className='guns__stock not-stock_'>No hay stock</h4>}
                    
                    <ItemCount item={item}/>
                    {/* <div className='container__buttons__shop'>
                        <div className='buttons'>
                            <button className='subtract'>-</button>
                            <button className='plus'>+</button>
                        </div>
                        <div className='shop'>
                            <button className='buy__now__'>COMPRAR AHORA</button>
                        </div>
                    </div> */}
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
                <p className='descript__details'><u>Peso</u>: {item.characteristics.weight}</p>
                <p className='descript__details'><u>Cargador</u>: {item.characteristics.charger}</p>
                <p className='descript__details'><u>Acción</u>: {item.characteristics.action}</p>
                <p className='descript__details'><u>Seguridad</u>: {item.characteristics.security}</p>
                <p className='descript__details'><u>Cañón</u>: {item.characteristics.canyon}</p>
                <p className='descript__details'><u>Funcionalidad</u>: {item.characteristics.funcionality}</p>
            </div>
        </div>
    </main>
  )
}

export default ItemDetail;
