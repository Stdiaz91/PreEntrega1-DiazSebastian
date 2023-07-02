//components
import React from 'react';
import { Products } from '../Products/Products';

//images
import BersaTPR9 from '../../assets/pistols/pistol-bersaTPR9-pavon.png';
import Taurus086cal38 from '../../assets/revolvers/revolver-taurus086cal38.png';
import HatsanCal12 from '../../assets/shotgun/shotgun-hatsan-cal12-escort20.png';
import Search from '../Search/Search';

function ItemListContainer() {
  return (
    <main>
      <div className='container__main__search'>
        <h2 className='main__title'>Todos los productos</h2>< Search /> 
      </div>
      <div className='container__products'>
        <Products  img={BersaTPR9} alt="BersaTPR9" name="Pistola Bersa TPR9 Pavón" price={251000}/>
        <Products  img={Taurus086cal38} alt="Taurus086cal38" name="Revólver Taurus 086 Cal 38" price={210000}/>
        <Products  img={HatsanCal12} alt="Hatsan_cal12" name="Escopeta Hatsan Cal 12 E20" price={374000}/>
        <Products  img={BersaTPR9} alt="BersaTPR9" name="Pistola Bersa TPR9 Pavón" price={251000}/>

        <Products  img={BersaTPR9} alt="BersaTPR9" name="Pistola Bersa TPR9 Pavón" price={251000}/>
        <Products  img={Taurus086cal38} alt="Taurus086cal38" name="Revólver Taurus 086 Cal 38" price={210000}/>
        <Products  img={HatsanCal12} alt="Hatsan_cal12" name="Escopeta Hatsan Cal 12 E20" price={374000}/>
        <Products  img={BersaTPR9} alt="BersaTPR9" name="Pistola Bersa TPR9 Pavón" price={251000}/>

        <Products  img={BersaTPR9} alt="BersaTPR9" name="Pistola Bersa TPR9 Pavón" price={251000}/>
        <Products  img={Taurus086cal38} alt="Taurus086cal38" name="Revólver Taurus 086 Cal 38" price={210000}/>
        <Products  img={HatsanCal12} alt="Hatsan_cal12" name="Escopeta Hatsan Cal 12 E20" price={374000}/>
        <Products  img={BersaTPR9} alt="BersaTPR9" name="Pistola Bersa TPR9 Pavón" price={251000}/>
      </div>
    </main>
  )
}

export default ItemListContainer
