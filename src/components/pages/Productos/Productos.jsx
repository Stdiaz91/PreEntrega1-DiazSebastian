
//components
import Search from '../../Search/Search';
import React, {useState, useEffect} from 'react';
import ItemList from '../../ItemList/ItemList';
import { toCapital } from '../../Functions/functions';
import SliderAllProducts from '../../SliderAllProducts/SliderAllProducts';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { dataBase } from '../../../firebase/config';
import Spinner from '../../Spinner/Spinner';

function Productos() {

    const [prod, setProd] = useState([]);
    const [search, setSearch] = useState('');
    const [title, setTitle] = useState('Todos los productos');
    const [load, setLoad] = useState(true);

    const category = useParams().category;
  
    useEffect(()=>{
      setLoad(true)
      const productsRef = collection(dataBase, "products");
      const q = category ? query(productsRef, where('category', '==', category)) : productsRef;
        getDocs(q)
          .then((resp) => {
            setProd(
              resp.docs.map((doc) => {
                return {...doc.data(), id: doc.id}
              })
            )
            setTimeout(() => {
              setLoad(false);
            }, 2500);
            if (category) {
              setTitle(category);
            } else{
              setTitle('Todos los productos');
            };
          });
    },[category]);

    const handleChangeSearch = (e) => {
      setSearch(e.target.value);
      filter(e.target.value);
    };

    const filter = (termSearch) =>{
      const resultSearch = prod.filter((element) => {
        if (element.title.toString().toLowerCase().includes(termSearch.toLowerCase()) 
        || element.category.toString().toLowerCase().includes(termSearch.toLowerCase())
        || element.class.toString().toLowerCase().includes(termSearch.toLowerCase())
        || element.brand.toString().toLowerCase().includes(termSearch.toLowerCase())
        || element.caliber.toString().toLowerCase().includes(termSearch.toLowerCase())) {
          return element;
        }
      })
      setProd(resultSearch);
    };
  
  return (
    <main>
    <div className='container__main__search'>
        <h2 className='main__title'>{toCapital(title)}</h2>< Search search={search} handleChangeSearch={handleChangeSearch} />
    </div>
    <div>
        <SliderAllProducts/>
    </div>
    <hr />
    <>
      <input type="text" placeholder='search' className='form-control' value={search} onChange={handleChangeSearch} />
    </>
      {load ? <Spinner/> : <ItemList products={prod}/>}
    <hr />
    </main>

  )
}

export default Productos;


