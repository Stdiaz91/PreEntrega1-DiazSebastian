import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const initialCart = JSON.parse(localStorage.getItem("cart")) || [];


export const CartProvider = ({children}) => {

  const [cart, setCart] = useState(initialCart);

  const handleAddCart = (item, count) => {
    const itemAdd = { ...item, count };
    const newCart = [...cart];
    const itIsInTheCart = newCart.find((product) => product.id === itemAdd.id);

    if (itIsInTheCart) {
      itIsInTheCart.count = itIsInTheCart.count + count;
      setCart(newCart);
    } else {
      setCart([...cart, itemAdd]);
    }

  };

  const quantityInTheCart = () => {
    return cart.reduce((acc, prod) => acc + prod.count, 0);
  };

  const totalPrice = () => {
    return cart.reduce((acc, prod) => acc + prod.price * prod.count, 0);
  };

  const emptyCart = () => {
    setCart([]);
  };

  const removeItem = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };

  const getQuantityProduct = (id) => {
    const product = cart.find((prod) => prod.id === id);
    return (cart.indexOf(product) >= 0) ? product.count : 0
  };

  useEffect(()=> {
    localStorage.setItem("cart", JSON.stringify(cart));
  },[cart]);

  return(
    <CartContext.Provider value={{
            cart, 
            handleAddCart, 
            quantityInTheCart, 
            totalPrice, 
            emptyCart,
            removeItem,
            getQuantityProduct
        }}>
            {children}
    </CartContext.Provider>

  );

};
