import React, {createContext,useContext, useState} from "react";

 export const CartContext = createContext()

export  const CartProvider = ({children})=>{
     const [cartItems, setCartItems] = useState([])

     const addToCart = (product)=>{
          setCartItems(prevCartItems => [...prevCartItems, product]);
          // Log updated state inside the callback
          console.log([...cartItems, product]);
     }


     const removetItem = (index)=>{
      let newCartItems = [...cartItems]
      newCartItems.splice(index,1)
      setCartItems(newCartItems)
      console.log(cartItems)
     }
     
    const clearCart = ()=>{
         setCartItems([])
    }
      

     return (
      <CartContext.Provider value={{cartItems, addToCart, removetItem, clearCart, setCartItems}}>
       {children}
      </CartContext.Provider>
     )
 }