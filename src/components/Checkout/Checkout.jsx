//style
import './Checkout.css';
import 'react-credit-cards/es/styles-compiled.css';

//components - hooks
import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { dataBase } from '../../firebase/config';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Cards from 'react-credit-cards';

const Checkout = () => {

  const [orderId, setOrderId] = useState("");

  const [state, setState] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    focused: ""
  });

  const navigate = useNavigate();

  const handleBackPage = () => {
    navigate('/shop');
}

  const handleInputChange = (e) => {
    setState({
        ...state,
        [e.target.name] : e.target.value
    });
  };

  const handleFocusChange = (e) => {
    setState({
      ...state,
      focused : e.target.name
  });
  };

  const { cart, totalPrice, emptyCart } = useContext(CartContext);
  const { register, handleSubmit } = useForm();

  const showAlert = () =>{
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Se realizó la compra con éxito',
      showConfirmButton: false,
      timer: 2500,
      background: '#33363d',
      color: '#f6cd46'
    })
  };

  const buy = (data) => {
    const order = {
      customer: data,
      products: cart,
      total: totalPrice()
    };
    console.log(order);

    const ordersRef = collection(dataBase, 'orders');
    addDoc(ordersRef, order)
      .then((doc) => {
        setOrderId(doc.id);
        emptyCart();
      })
  };

  if (orderId) {
    return (
      <main>
        <h2 className='main__title'>Muchas Gracias por tu compra</h2>
        <p className='text__buy'>Tu número de pedido es <span>{orderId}</span></p>
        <p className='text__buy'>Llegará a tu domicilio en las próximas 72 hs. hábiles, luego de coordinar con el vendedor</p>
        <div className='container__btn__checkout'>
          <Link to='/productos'><button>Seguir Comprando</button></Link>
          <Link to='/'><button>Volver al Inicio</button></Link>
        </div>
      </main>
    )
  };

return (
  <main>
      <div className='container__main__search'>
          <h2 className='main__title'>Finalizar Compra</h2>
          <button className='btn__slider' onClick={handleBackPage}>Volver</button>
      </div>
        <form className='form__buy' onSubmit={handleSubmit(buy)}>
          <div className='container__user'>
            <div className='div__user'>
              <h2 className='supporting__title'>Datos del Usuario</h2>
            </div>
            <div className='div__user'>
              <input 
                type="text" 
                placeholder='Ingrese su nombre' 
                className='inputs' 
                name='name' 
                required 
                {...register("name")}
              />
              <input 
                type="text" 
                placeholder='Ingrese su apellido' 
                className='inputs' 
                name='surname' 
                required 
                {...register("surname")}
              />
              <input 
                type="text" 
                placeholder='Ingrese su número de DNI' 
                className='inputs' 
                name='dni' 
                required 
                {...register("DNI")}
              />
              <input 
                type="text" 
                placeholder='Ingrese su número de CLU' 
                className='inputs' 
                name='clu' 
                required 
                {...register("CLU")}
              />
              <input 
                type="email" 
                placeholder='Ingrese su correo' 
                className='inputs' 
                name='email' 
                required 
                {...register("email")}
              />
              <input 
                type="phone" 
                placeholder='Ingrese su teléfono' 
                className='inputs' 
                name='phone' 
                required 
                {...register("phone")}
              />    
            </div>
          </div>
          <div className='container__send'>
            <div className='container__send__1'>
              <h2 className='supporting__title'>Datos de Envío/Entrega</h2>
              <p className='note'>**el envío se coordina con el vendedor, luego de realizar el trámite</p>
            </div>
            <div className='container__send__2'>
              <div className='__send__'>
                <h3>Envío</h3>
              </div>
              <div className='container__dates'>
                <select 
                  name="Pais" 
                  id="pais" 
                  className='select__1' 
                  required 
                  {...register("country")}>
                  <option 
                    value="Argentina" 
                    selected
                    >Argentina
                  </option>
                </select>
                <select 
                  name="Provincia" 
                  id="provincia" 
                  className='select__2'
                  required
                  {...register("state")}>
                  <option 
                    value="Ciudad Autónoma de Bs As"
                    >Ciudad Autónoma de Bs As
                  </option>
                  <option 
                    value="Buenos Aires"
                    >Buenos Aires
                  </option>
                  <option 
                    value="Catamarca"
                    >Catamarca
                  </option>
                  <option 
                    value="Chaco"
                    >Chaco
                  </option>
                  <option 
                    value="Chubut"
                    >Chubut
                  </option>
                  <option 
                    value="Córdoba"
                    >Córdoba
                  </option>
                  <option 
                    value="Corrientes"
                    >Corrientes
                  </option>
                  <option 
                    value="Entre Rios"
                    >Entre Ríos
                  </option>
                  <option 
                    value="Formosa"
                    >Formosa
                  </option>
                  <option 
                    value="Jujuy"
                    >Jujuy
                  </option>
                  <option 
                    value="La Pampa"
                    >La Pampa
                  </option>
                  <option 
                    value="La Rioja"
                    >La Rioja
                  </option>
                  <option 
                    value="Mendoza"
                    >Mendoza
                  </option>
                  <option 
                    value="Misiones"
                    >Misiones
                  </option>
                  <option 
                    value="Neuquen"
                    >Neuquén
                  </option>
                  <option 
                    value="Rio Negro"
                    >Río Negro
                  </option>
                  <option 
                    value="Salta"
                    >Salta
                  </option>
                  <option 
                    value="SAn Juan"
                    >San Juan
                  </option>
                  <option 
                    value="San Luis"
                    >San Luis
                  </option>
                  <option 
                    value="Santa Cruz"
                    >Santa Cruz
                  </option>
                  <option 
                    value="Santa Fe"
                    >Santa Fe
                  </option>
                  <option 
                    value="Santiago del Estero"
                    >Santiago del Estero
                  </option>
                  <option 
                    value="Tierra del Fuego"
                    >Tierra del Fuego
                  </option>
                  <option 
                    value="Tucuman"
                    >Tucumán
                  </option>
                </select>
                <input 
                  type="text" 
                  placeholder='Ciudad' 
                  className='inputs' 
                  name='city' 
                  required 
                  {...register("city")}
                />
                <input 
                  type="text" 
                  placeholder='Código Postal' 
                  className='inputs' 
                  name='postcode' 
                  required 
                  {...register("postCode")}
                />
                <input 
                  type="text" 
                  placeholder='Domicilio: nombre y número de calle' 
                  className='inputs' 
                  name='street' 
                  required 
                  {...register("street")}
                />
              </div>
            </div>
          </div>
          <div className='card__'>
            <h2 className='payment__title'>Realizar pago</h2>
            <div className='card__body'>
              <Cards
                number={state.number}
                name={state.name}
                expiry={state.expiry}
                cvc={state.cvc}
                focused={state.focused}
              />
              <div className='container__card'>
                <div className='dates__card'>
                  <label htmlFor="number" className='note_'>Número de Tarjeta</label>
                  <input 
                    type="text"
                    name='number'
                    id='number'
                    maxLength='16'
                    required
                    onChange={handleInputChange}
                    onFocus={handleFocusChange}
                    className='inputs'
                    placeholder='Ej 1234 5678 91011 1213' 
                  />
                </div>

                <div className='dates__card'>
                  <label htmlFor="name" className='note_'>Nombre del Titular</label>
                  <input 
                    type="text"
                    name='name'
                    maxLength='20'
                    required
                    id='name'
                    onChange={handleInputChange}
                    onFocus={handleFocusChange}
                    className='inputs'
                    placeholder='**Como está en la tarjeta' 

                  />
                </div>
                <div className='container__expiry-cvc'>
                  <div className='dates__card'>
                    <input 
                      type="text"
                      name='expiry'
                      id='expiry'
                      maxLength='4'
                      required
                      onChange={handleInputChange}
                      onFocus={handleFocusChange}
                      placeholder='Fecha de expiración'
                      className='inputs_' 
                    />
                  </div>

                  <div className='dates__card'>
                    <input 
                      type="text"
                      name='cvc'
                      id='cvc'
                      maxLength='4'
                      required
                      onChange={handleInputChange}
                      onFocus={handleFocusChange}
                      placeholder='Código de seguridad'
                      className='inputs_'  
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button type='submit' className='submit' onClick={()=>showAlert()}>Comprar</button>
        </form>
  </main>
)
};

export default Checkout;
