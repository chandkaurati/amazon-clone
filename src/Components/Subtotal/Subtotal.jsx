import React, { useState } from 'react'
import './subtotal.css'
import { useContext  } from 'react'
import { CartContext } from '../../StateProvider/cartprovider'
import CurrencyFormat from 'react-currency-format'
function Subtotal() {
  const {getbasketTotal,cartItems, setCartItems, addToCart} = useContext(CartContext)
   const [total, settotal]  = useState()
  return (
    <div className='Subtotal'>
    <CurrencyFormat
      renderText={(value)=>(
        <>
        <p>Subtotal ({`${cartItems.length} Items`}) : <strong>{value}</strong></p>
        <small className='subtotal__gift'>
        <input type="checkbox" />
        this order containes a gift
        </small>
        </>
      )}
      decimalScale={2}
      value={getbasketTotal}
      displayType={'text'}
      thousandSeparator = {true}
      prefix={"$"}
    />
    <button> Proceed to checkout </button>
    </div>
  )
}

export default Subtotal
