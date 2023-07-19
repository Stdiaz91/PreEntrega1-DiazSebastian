import React, { useEffect, useState } from "react"
import { RequestItemForId } from "../Functions/functions";
import OffItem from "../OffItem/OffItem";


const Off = ({itemId}) => { 
    const [item, setItem] = useState();

    useEffect(() => {
      RequestItemForId(itemId)
            .then((res) =>{
                setItem(res);
            })
    },[itemId])
  return (
    <>
      {item && <OffItem item={item} />}
    </>
  )
}

export default Off;
