//components
import './OffItem.css';
//hook
import { Link } from 'react-router-dom';


//image
import Taurus from '../../assets/rt82-cal38-removebg-preview.png';

const OffItem = ( {item} ) => {
    return (
        <div className='offer'>
            <div className='container__offer'>
                <div className='offer__'>
                    <img src={item.image} className='img__offer' alt="Pistola-Bersa-Thunder22" />
                    <div className='offer__details'>
                        <h2 className='offer__title'>AHORRA 35% Pistola Glock 30S</h2>
                        <Link to={`/item/${item.id}`} className='offer__buy'>COMPRAR AHORA</Link>
                    </div>
                </div>
                <div className='offer__'>
                    <img src={Taurus} className='img__offer' alt="Escopeta-Akkar-Cal12" />
                    <div className='offer__details'>
                        <h2 className='offer__title'>AHORRA 15% Revolver Taurus RT82 </h2>
                        <Link to={`/item/70`} className='offer__buy'>COMPRAR AHORA</Link>
                    </div>
                </div>
            
            </div>

        </div>
    )
}

export default OffItem
