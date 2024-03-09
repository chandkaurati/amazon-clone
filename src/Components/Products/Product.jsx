import React from 'react'
import './Product.css'
function Product({title, image, price , rating }) {
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
       <button>Add to Basket</button>
    </div>
  )
}

export default Product
