import React from 'react'
import './Checkout.css'
function Checkout() {
  return (
    <div className='checkout'>
     <div className="checkout__left">

      <div>
     <h2 className='checkout__title'>Your shopping Basket</h2>
      </div>

     </div>

     <div className="checkout__right">
        <h2>subtotal go here </h2>
        {/* subtotal COmponant  */}
     </div>
     
    </div>
  )
}

export default Checkout
