//style
import './Contacto.css';

//components - hook
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { dataBase } from '../../../firebase/config';
import Swal from 'sweetalert2';

//image
import img from '../../../assets/rifle-removebg-preview.png';

const Contacto = () => {

    const { register, handleSubmit } = useForm();
    const [message, setMessage] = useState("");

    const showAlert = () =>{
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'El mensaje se envió con éxito. Responderemos a la brevedad',
          showConfirmButton: false,
          timer: 2800,
          background: '#33363d',
          color: '#f6cd46'
        })
      };

    const send = (data) =>{
        const msg = {
            messages: data          
        };
        const msgRef = collection(dataBase, 'messages');
        addDoc(msgRef, msg)
          .then((doc) => {
            setMessage(doc.id);
          })
    };
    if (message) {
        showAlert();
    };

  return (
    <main>
        <div className='container__main__search'>
            <h2 className='main__title'>Contáctanos</h2> 
        </div>
        <div className='container__form__img'>
            <div className='img__'>
                <img src={img} alt="rifle" />
            </div>
            <form className='form' id='form_' onSubmit={handleSubmit(send)}>
                <input type="text" placeholder='Ingrese su nombre' className='inputs' required {...register("name")}/>
                <input type="email" placeholder='Ingrese su correo' className='inputs' required {...register("email")}/>
                <input type="phone" placeholder='Ingrese su teléfono' className='inputs' required {...register("phone")}/>
                <textarea className='text__area' cols="30" rows="10" placeholder='Escribí tu mensaje aquí' required {...register("message")}></textarea>
                <button type='submit' className='submit'>Enviar</button>
            </form>
        </div>
    </main>
  )
}

export default Contacto;
