
//components
import Search from '../../Search/Search';
import React, {useState, useEffect} from 'react';
import ItemList from '../../ItemList/ItemList';
import {requestProducts, toCapital} from '../../Functions/functions';
import SliderAllProducts from '../../SliderAllProducts/SliderAllProducts';
import { useParams } from 'react-router-dom';



function Productos() {

    const [prod, setProd] = useState([]);
    const [title, setTitle] = useState('Todos los productos');



    const category = useParams().category;
  
    useEffect(()=>{
      requestProducts()
        .then((res)=>{
          if (category) {
            setProd(res.filter((prod)=> prod.category === category));
            setTitle(category);
          }else{
            setProd(res);
            setTitle('Todos los productos');
          };

        })
    },[category]);
  

  return (
    <main>
    <div className='container__main__search'>
        <h2 className='main__title'>{toCapital(title)}</h2>< Search />
    </div>
    <div>
        <SliderAllProducts/>
    </div>
    <hr />
    <ItemList products={prod} />
    <hr />
    </main>

  )
}

export default Productos;


