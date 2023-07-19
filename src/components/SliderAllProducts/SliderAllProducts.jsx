import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './SliderAllProducts.css';
import { Link } from 'react-router-dom';


function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className='container__slider__'>
      <Carousel.Item className='item__slider__' >
        <img
          className="d-block w-100__"
          src="https://w.forfun.com/fetch/23/23872822be6fe050f3bb85f4bfb6840c.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='h3__slide__'>PISTOLAS</h3>
          <Link to='/productos/pistolas' className='btn__slider__'>IR AHORA</Link>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100__"
          src="https://images5.alphacoders.com/593/593021.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='h3__slide__'>REVÓLVERES</h3>
          <Link to='/productos/revolveres' className='btn__slider__'>IR AHORA</Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100__"
          src="https://images4.alphacoders.com/228/228808.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='h3__slide__'>ESCOPETAS</h3>
          <Link to='/productos/escopetas' className='btn__slider__'>IR AHORA</Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100__"
          src="https://w0.peakpx.com/wallpaper/867/322/HD-wallpaper-m4-carbine-rifle-gun-weapon-m4-carbine.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='h3__slide__'>CARABINAS</h3>
          <Link to='/productos/carabinas' className='btn__slider__'>IR AHORA</Link>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default ControlledCarousel;