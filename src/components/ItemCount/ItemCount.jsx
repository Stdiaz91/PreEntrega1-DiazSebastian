//style
import './ItemCount.css';

import Swal from 'sweetalert2';


const ItemCount = ({ count, handlePlus, handleSubtract, handleAddCart }) => {
    const showAlert = () =>{
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Se agregaron productos al carrito',
          showConfirmButton: false,
          timer: 2000,
          background: '#33363d',
          color: '#f6cd46'
        })
      };

      function executeFunctions() {
        handleAddCart();
        showAlert();
      }
    
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
            <button className='add__cart' onClick={executeFunctions}>AGREGAR AL CARRITO</button>
        </div>
    </div>
  );
};

export default ItemCount;
