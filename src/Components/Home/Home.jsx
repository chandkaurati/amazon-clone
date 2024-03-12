import React from 'react'
import './Home.css'
import Product from '../Products/Product'
function Home() {
  return (
    <div className='home' >
     <div className="home__container">
      <img className='Home__image' src="https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3000_.jpg" alt="" />
     
     <div className="home__row">
      <Product
       id = "15353253"
       title="Protect your peace "
       price={29.38}
       image="https://m.media-amazon.com/images/I/41sKk71L1-L._SY445_SX342_.jpg"
       rating={5}/>
      <Product
      id = "15353253"
      price={30.23}
      rating={5}
      title="Smart Watch for Men Women(Answer/Make Call),1.83 Fitness Tracker with Blood Pressure Heart Rate Monitor,Sleep Tracker"
        image="https://m.media-amazon.com/images/I/81zSh9pyYhL._AC_UY218_.jpg"
       />
      <Product
      id = "15353253"
      price={43.23}
      rating={3}
      title="Gaming Chair, Backrest and Seat Height Adjustable..."
      image="https://m.media-amazon.com/images/I/61YBs2I56YL._AC_UL320_.jpg"
      />
     </div>

     <div className="home__row">
     <Product
     id  = "1535235"
     rating={3}
     price={320.53}
     title="Redmi 108 cm (43 inches) 4K Ultra HD Android Smart LED TV X43 | L43R7-7AIN (Black)"
     image="https://m.media-amazon.com/images/I/71S1CVKFrfL._AC_UL320_.jpg"
     />
     <Product
     id = "15353253"
     rating={4}
     price={23.32}
     title="A30 3D Unique Design Digital Printed Polyester"
     image="https://m.media-amazon.com/images/I/51JtNkKEZXL._SX300_SY300_QL70_FMwebp_.jpg"
     />

     <Product
     id = "15353253" 
     rating={4}
     price={24.32}
     title="Faber 750W 1.6L Multi Cooker"
     image="https://m.media-amazon.com/images/I/31HwMbLOhIL._SX300_SY300_QL70_FMwebp_.jpg"
    
     />
     </div>

     <div className="home__row">
     <Product 
      id = "15353253"
      image="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/3a04a81b-bafd-4f7c-8d08-0b26e5870ce3.jpeg"
     />
     </div>


      </div>   
    </div>
  )
}

export default Home
Product