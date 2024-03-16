import React from 'react'
import './Product.css'
import { CartContext } from '../../StateProvider/cartprovider'
import { useContext } from 'react'

function Product({id,title, image, price , rating }) {
const {cartItems, setCartItems, addToCart} = useContext(CartContext)
        
  function handleclick(e){
             // Check if the item already exists in cart
            //  const existingItem = cartItems.find((item)=>{
            //       item.id == id
            //  });
            //  console.log(existingItem)
            //  if (existingItem) {
            //      // If item already exists, update its quantity
            //      const updatedCartItems = cartItems.map(item =>
            //          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            //      );
            //      setCartItems(updatedCartItems);
            //  }
                 // If item doesn't exist, add it to cart
                 addToCart({
                     id: id,
                     title: title,
                     image: image,
                     price: price,
                     rating: rating,
                     quantity: 1 // Add quantity property for tracking
                 });
             
     
  
  }
  return (
    <div className='Product'>
       <div className="product__info">
        <p id='title'>{title}</p>
        <p  className='Product__price'>
            <small>$</small>
            <strong>{price}</strong>
        </p>

        <div className='Product__rating'>
           {Array(rating).fill().map((_,i)=>(
             <p key={i}>⭐</p>
           ))}
        </div>
       </div>
       <img src={image} alt="" />
       <button onClick={handleclick}>Add to Basket</button>
    </div>
  )
}
export default Product
