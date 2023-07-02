//components
import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

//images
import allProductsIcon from '../../assets/all-products.png'
import pistol from '../../assets/pistol.png';
import revolver from '../../assets/revolver.png';
import shotgun from '../../assets/shotgun.png';
import carabine from '../../assets/carabine.png';

function NavBar() {
  return (
    <div className='container__nav'>
        <aside>
            < Header />
            <nav>
                <ul className='menu'>
                    <li className='item__menu active'>
                      <img src={ allProductsIcon } className='gun__icons active' alt="pistola"/>
                      <button className='button__menu active'>Todos los productos</button>
                    </li>
                    <li className='item__menu'>
                      <img src={ pistol } className='gun__icons' alt="pistola"/>
                      <button className='button__menu'>Pistolas</button>
                    </li>
                    <li className='item__menu'>
                      <img src={ revolver } className='gun__icons' alt="revolver"/>
                      <button className='button__menu'>Revólveres</button>
                    </li>
                    <li className='item__menu'>
                      <img src={ shotgun } className='gun__icons' alt="escopeta"/>
                      <button className='button__menu'>Escopetas</button>
                    </li>
                    <li className='item__menu'>
                      <img src={ carabine } className='gun__icons' alt="carabina"/>
                      <button className='button__menu'>Carabinas</button>
                    </li>
                    <CartWidget />
                </ul>
            </nav>
            < Footer />
        </aside>
    </div>
  );
}

export default NavBar;



