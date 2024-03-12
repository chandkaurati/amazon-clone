import React from 'react'
import './Checkout.css'
import Subtotal from '../Subtotal/Subtotal'
function Checkout() {
  return (
    <div className='checkout'>
     <div className="checkout__left">

      <div>
     <h2 className='checkout__title'>Your shopping Basket</h2>
     {/* Basket   item */}
      </div>

     </div>

     <div className="checkout__right">
        <h2>subtotal go here </h2>
        <Subtotal/>
     </div>
     
    </div>
  )
}

export default Checkout
