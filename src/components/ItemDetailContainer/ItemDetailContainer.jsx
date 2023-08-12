//components
import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { dataBase } from '../../firebase/config';
import SpinnerItemDC from '../Spinner/SpinnerItemDC';

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const id = useParams().id;
    const [load, setLoad] = useState(true);
    
    useEffect(() => {
      const docRef = doc(dataBase, 'products', id);
      getDoc(docRef)
        .then((resp) => {
            setItem(
              {...resp.data(), id: resp.id}
            );
            setTimeout(() => {
              setLoad(false);
            }, 2000);
        });
    },[id]);

  return (
    <div>
      {load ? <SpinnerItemDC/> : item && <ItemDetail item={item}/>}
    </div>
  );
};

export default ItemDetailContainer;

