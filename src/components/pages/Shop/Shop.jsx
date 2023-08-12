//style
import './Shop.css'

//component
import Table from 'react-bootstrap/Table';

//hooks
import { CartContext } from '../../../context/CartContext';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Shop() {

  const { cart, totalPrice, emptyCart, removeItem } = useContext(CartContext);
  const handleEmpty = () =>{
    emptyCart();
  };

  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
}

  return (
    <main>
      <div className='container__main__search'>
        <h2 className='main__title'>Tu Carrito</h2>
      </div>
      <div className='container__table'>
        <>
        {
          cart.length > 0 ?
          <>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th></th>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                    {
                      cart.map((prod) => (
                        <tr key={prod.id}>
                          <td className='trash'><i className="bi bi-trash3" onClick={()=>removeItem(prod.id)}></i></td>
                          <td><Link to={`/item/${prod.id}`}>{prod.title}</Link></td>
                          <td>${prod.price}</td>
                          <td>{prod.count}</td>
                          <td>${prod.price * prod.count}</td>
                        </tr>
                      ))
                    }
              </tbody>
            </Table>
            <div className='container__totalprice'>
              <h3 className='total__price'>Precio total: ${totalPrice()}</h3>
              <button className='button_empty' onClick={handleEmpty}>Vaciar Carrito <i className="bi bi-trash3"></i></button>
              <Link to='/checkout'><button className='button_empty'>Finalizar Compra</button></Link>
            </div>
          </> : 
          <>
          <h3 className='total__price'>El Carrito está vacío <i className="bi bi-emoji-frown-fill"></i></h3>
          <button className='btn__slider' onClick={handleBack}>Volver al Inicio</button>
          </>
        }
        </>
      </div>
    </main>
  );
};

export default Shop;