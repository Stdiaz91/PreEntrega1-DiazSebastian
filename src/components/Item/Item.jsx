//style
import './Items.css';

//hook
import { Link } from 'react-router-dom';



function Item ({ product }) {
    
    return (
        <div className='product'>
            <img src={product.image} className='image__product' alt={product.title}/>
            <div className='details__product'>
                <div className='container__name__product'>
                    <h3 className='name__product'>{product.title}</h3>
                </div>
                <div className='container__caliber__product'>
                    <h3 className='caliber__product'>{product.caliber}</h3>
                </div>
                <div className='container__price__product'>
                    <p className='price__product'>${product.price}</p>
                </div>
                <div className='container__buy__now'>
                    <Link to={`/item/${product.id}`} className='buy__now'>VER DETALLES</Link>            
                </div>
            </div>
        </div>
    )
};

export default Item;