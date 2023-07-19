import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';
import {lastestProducts} from '../../data/LastestProducts';
import { Link } from 'react-router-dom';



function NoTransitionExample() {
  return (
    <Carousel slide={false} className='container__carousel'>
      {lastestProducts.map((item) => (
        <Carousel.Item key={item.id} className='container__item'>
          <div className='container__img'>
            <div className='new'>NUEVO</div>
            <img
              className="d-block w-100"
              src={item.image}
              alt={item.title}
            />
          </div>
          <Carousel.Caption className='container__caption'>
            <h3>{item.title}</h3>
            <p>{item.price}</p>
            <Link to={`/item/${item.id}`} className='btn__carousel'>VER MÁS</Link>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default NoTransitionExample;