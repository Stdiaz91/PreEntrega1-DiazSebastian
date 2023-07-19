//components
import React, { useEffect, useState } from 'react';
import { RequestItemForId } from '../Functions/functions';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const id = useParams().id;
    
    useEffect(() => {
        RequestItemForId(Number(id))
            .then((res) =>{
                setItem(res);
            })
    },[id])

  return (
    <div>
      {item && <ItemDetail item={item}/>}
    </div>
  );
};

export default ItemDetailContainer;

