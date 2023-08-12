//styles
import './App.css';

//components
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//pages
import Home from './components/pages/Home/Home';
import Productos from './components/pages/Productos/Productos';
import Shop from './components/pages/Shop/Shop';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ErrorFind from './components/pages/Error/Error';
import Contacto from './components/pages/Contacto/Contacto';
import { CartProvider } from './context/CartContext';
import Checkout from './components/Checkout/Checkout';


function App() {

  return (
    <div className="App">

      <CartProvider>

        <BrowserRouter>

          < NavBar />

          <Routes>
            <Route path='/' element={< Home/>}/>
            <Route path='/productos' element={< Productos/>}/>
            <Route path='/productos/:category' element={< Productos/>}/>
            <Route path='/shop' element={< Shop/>}/>
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
            <Route path='/contacto' element={< Contacto/>}/>
            <Route path='/checkout' element={< Checkout/>}/>
            <Route path='*' element={< ErrorFind/>}/>
          </Routes>

        </BrowserRouter>

      </CartProvider>

    </div>
  );
};

export default App;
