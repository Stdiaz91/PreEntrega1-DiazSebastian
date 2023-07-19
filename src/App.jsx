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


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        < NavBar />

        <Routes>
          <Route path='/' element={< Home/>}/>
          <Route path='/productos' element={< Productos/>}/>
          <Route path='/productos/:category' element={< Productos/>}/>
          <Route path='/shop' element={< Shop/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='*' element={< ErrorFind/>}/>
        </Routes>

      </BrowserRouter>
    </div>
  );
};

export default App;
