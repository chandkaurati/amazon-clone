import React, { useEffect, useState } from "react";
import logo from '../../assets/amazon-logo.png'
import searchlogo from  '../../assets/Search-icon.png'
import shoppingBasket from '../../assets/shopping-basket.png'
import "./Header.css";
import { CartContext, CartProvider } from "../../StateProvider/cartprovider";
import { useContext } from "react";
import {Link}  from 'react-router-dom'
function Header() {
  const {cartItems} = useContext(CartContext)
  const [numberofitems, setnumberofitems] = useState(0)
    useEffect(()=>{
    setnumberofitems(cartItems?.length)
    },[cartItems])

  return (
    <div className="header">
      <Link to="/">
      <img
        className="header__logo"
        src={logo}
        alt="Brand-logo-amazon"
      />
      </Link>

      <div className="header__search">
        <input type="text" />
        <img src={searchlogo} alt="searchlogo" />
      </div>

      <div className="header__nav">

        <div className="header__option">
          <span className="header__optionLineOne">hello guest</span>
          <span className="header__optionLineTwo">Sign in</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">retunrs</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
         
         <div className="header__optionBasket">
        <Link to="/checkout"> <img src={shoppingBasket} alt="shopping-basket" /></Link>
          <span className="header__optionLineTwo header__Count" >{numberofitems}</span>
         </div>

      </div>

    </div>
  );
}

export default Header;
