import { useState } from "react";

export const Products = ({img, alt, name, price})=>{

const [number, setNumber] = useState(0);
  const add = () =>{
    setNumber(number +1);
  };

  const takeout = () =>{
    setNumber(number -1);
  };

  console.log(number);

  return(
    <div className='product'>
      <img src={ img } className='image__product' alt={alt}/>
      <div className='details__product'>
        <h3 className='name__product'>{name}</h3>
        <p className='price__product'>${price}</p>
        <div className='add__or__takeout'>
          <button className='add' onClick={add}>+</button>
          <button className='takeout' onClick={takeout}>-</button>
        </div>
        <div className='container__buy__now'>
          <button className='buy__now'>COMPRAR AHORA</button>
        </div>
      </div>
    </div>
  );
};
