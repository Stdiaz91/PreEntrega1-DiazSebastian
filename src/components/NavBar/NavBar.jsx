//styles
import './NavBar.css';

//components
import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link, NavLink , useNavigate } from 'react-router-dom';

//images
import home from '../../assets/home-icon.png';
import weapons from '../../assets/all-weapons-removebg-preview.png';
import pistol from '../../assets/pistol.png';
import revolver from '../../assets/revolver.png';
import shotgun from '../../assets/shotgun.png';
import carabine from '../../assets/carabine.png';

function NavBar() {
  const navi = useNavigate(); //useNavigation para navegar por los elementos al clickear los iconos

  return (
    <div className='container__nav'>
        <aside>
            < Header />
            <nav>
                <ul className='menu'>
                    <li className='item__menu'>
                      <img src={ home } className='gun__icons' alt="pistola" onClick={()=> navi('/')}/>
                      <NavLink to='/' className='button__menu'>Home</NavLink>
                    </li>
                    <li className='item__menu'>
                      <img src={ weapons } className='gun__icons' alt="productos" onClick={()=> navi('/productos')}/>
                      <Link to='/productos' className='button__menu'>Productos</Link>
                    </li>

                    <li className='item__menu'>
                      <img src={ pistol } className='gun__icons' alt="pistola" onClick={()=> navi('/productos/pistolas')}/>
                      <Link to='/productos/pistolas' className='button__menu'>Pistolas</Link>
                    </li>
                    <li className='item__menu'>
                      <img src={ revolver } className='gun__icons' alt="revolver" onClick={()=> navi('/productos/revolveres')}/>
                      <Link to='/productos/revolveres' className='button__menu'>Revólveres</Link>
                    </li>
                    <li className='item__menu'>
                      <img src={ shotgun } className='gun__icons' alt="escopeta" onClick={()=> navi('/productos/escopetas')}/>
                      <Link to='/productos/escopetas' className='button__menu'>Escopetas</Link>
                    </li>
                    <li className='item__menu'>
                      <img src={ carabine } className='gun__icons' alt="carabina" onClick={()=> navi('/productos/carabinas')}/>
                      <Link to='/productos/carabinas' className='button__menu'>Carabinas</Link>
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



