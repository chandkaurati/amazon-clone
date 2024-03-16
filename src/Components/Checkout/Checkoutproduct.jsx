import React from 'react'
import './CheckoutProduct.css'
import { CartContext } from '../../StateProvider/cartprovider'
import { useContext } from 'react'
function Checkoutproduct({id,  image , price, title, rating}) {
  const {cartItems, removetItem} = useContext(CartContext)

    function removeFromBasket(){
  //     console.log(id + "removes")
      const index = cartItems.findIndex((item) => {
        return item.id === id; 
       
    });

    if (index !== -1) {
      removetItem(index);
      console.log("Item removed from index:", index);
  } else {
     console.log("Item not found in cart."); // Log if item not found
  }  

    let product  =  cartItems.find((item)=>{
        return   item.id === id 
    }) 

    // console.lo(product)
        
  }
  return (
    <div className='checkoutProduct'>
     <img src={image} alt="" /> 
     <div className="product-info">
        <p className='checkoutproduct-title'>{title}</p>
            <p className='checkoutproduct-price'>
              <small>$</small>
              <strong>{price}</strong>
            </p>
            <div className="ratings">
            {Array(rating).fill().map((_,i)=>(
             <p key={i}>⭐</p>
           ))}
            </div>
            <button onClick={removeFromBasket} className='remove-cart-btn'>remove From Basket</button>
      </div>
    </div>
  )
}

export default Checkoutproduct
