import React, { useState } from 'react'
import './Checkout.css'
import Subtotal from '../Subtotal/Subtotal'
import { useContext } from 'react'
import { CartContext } from '../../StateProvider/cartprovider'
import Checkoutproduct from './Checkoutproduct'

function Checkout() {
  const {cartItems} = useContext(CartContext)
  // const [numberOfitems, setnumberOfitems]  = useState(0)
  return (
    <div className='checkout'>
     <div className="checkout__left">

      <div>
     <h2 className='checkout__title'>Your shopping Basket</h2>
      {cartItems.map((item)=>{
        return <Checkoutproduct
          id = {item.id}
          title={item.title}
          price={item.price}
          rating={item.rating}
          image={item.image}
        />
      })}
      </div>

     </div>

     <div className="checkout__subtoatal">
        <h2>Subtotal</h2>
        <Subtotal/>
     </div>
     
    </div>
  )
}

export default Checkout
