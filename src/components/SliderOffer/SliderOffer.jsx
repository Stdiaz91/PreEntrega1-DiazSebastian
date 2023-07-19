//style
import './SliderOffer.css';

//components
import Carousel from 'react-bootstrap/Carousel';

//hooks
import { Link } from 'react-router-dom';
import { useState } from 'react';



//images
import bersa from '../../assets/slider/slide-bersa.jpg';
import taurus from '../../assets/slider/slide_taurus.jpg';
import WilsonCombat from '../../assets/slider/Wilson-Combat-Magazine-Fed-Shotgun-M.F.S-1.jpg';


function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className='container__slider'>
      <Carousel.Item className='item__slider' >
        <img
          className="d-block w-100"
          src={bersa}
          alt="First slide"
        />
        <Carousel.Caption>
          <h4 className='h4__slide'>OFERTA ESPECIAL</h4>
          <h3 className='h3__slide'>AHORRA 20% EN UNA BERSA THUNDER9</h3>
          <Link to={`/item/17`} className='btn__slider'>¡COMPRALA AHORA!</Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={taurus}
          alt="Second slide"
        />

        <Carousel.Caption>
            <h4 className='h4__slide'>MEGA OFERTA</h4>
          <h3 className='h3__slide'>APROVECHA 25% OFF EN TAURUS GX4</h3>
          <Link to={`/item/102`} className='btn__slider'>¡COMPRALA AHORA!</Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={WilsonCombat}
          alt="Third slide"
        />

        <Carousel.Caption>
        <h4 className='h4__slide'>ON SALE</h4>
          <h3 className='h3__slide'>25% OFF! ESCOPETA WC</h3>
          <Link to={`/item/101`} className='btn__slider'>¡COMPRALA AHORA!</Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;