//styles
import './Home.css';

//components
import SliderOffer from '../../SliderOffer/SliderOffer';
import Off from '../../Off/Off';
import Banner from '../../Banner/Banner';
import Carousel from '../../Carousel/Carousel';
import Brands from '../../Brands/Brands';
import BannerFooter from '../../BannerFooter/BannerFooter';
import BannerContact from '../../BannerContact/BannerContact';
import Search from '../../Search/Search';

const Home = () => {

  return (
    <main>
      <div className='container__main__search'>
        <h2 className='main__title'>Calidad y excelencia en armamentos desde 1991</h2>< Search /> 
      </div>
      <div className='container__slider__offer'>
        < SliderOffer />
        <Off itemId={32}/>
      </div>
      <Banner/>
      <div className='container__carousel-brands'>
        <div>
          <h2 className='supporting__title'>Últimos productos</h2>
          < Carousel />
        </div>
        <div>
          <Brands/>
          <BannerContact/>
        </div>
      </div>
      <div>
        <BannerFooter/>
      </div>
    </main>
  )
};

export default Home;
