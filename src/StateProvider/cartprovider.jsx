import React, {createContext,useContext, useState} from "react";

 export const CartContext = createContext()

export  const CartProvider = ({children})=>{
     const [cartItems, setCartItems] = useState([])
      console.log(cartItems.length + "from the providee")
     let getbasketTotal = cartItems?.reduce((acc, curr)=>{  
       return  acc += curr.price
     },0)
       console.log(getbasketTotal)

     const addToCart = (product)=>{
          setCartItems(prevCartItems => [...prevCartItems, product]);
          // Log updated state inside the callback
          console.log([...cartItems, product]);
     }


     const removetItem = (id)=>{
      let newCartItems = [...cartItems]
      let index =  cartItems.findIndex((item)=> item.id === id)
      console.log(index)
      newCartItems.splice(index,1)
      setCartItems(newCartItems)
      console.log(cartItems)
     }
     
    const clearCart = ()=>{
         setCartItems([])
    }
      

     return (
      <CartContext.Provider value={{getbasketTotal,cartItems, addToCart, removetItem, clearCart, setCartItems}}>
       {children}
      </CartContext.Provider>
     )
 }