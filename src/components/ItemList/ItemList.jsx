import Item from '../Item/Item';
import './ItemList.css';

const ItemList = ( {products} ) => {
    return (
        <div className='container__products'>

            {
                products.length > 0 &&
                products.map((product) => {
                    return (
                        <Item key={product.id} product={product}/>
                    )
                })
            }
        </div>
    );
};

export default ItemList