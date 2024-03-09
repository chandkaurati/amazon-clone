import React from "react";
import logo from '../../assets/amazon-logo.png'
import searchlogo from  '../../assets/Search-icon.png'
import shoppingBasket from '../../assets/shopping-basket.png'
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src={logo}
        alt="Brand-logo-amazon"
      />

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
          <img src={shoppingBasket} alt="shopping-basket" />
          <span className="header__optionLineTwo header__Count" >0</span>
         </div>
      </div>

    </div>
  );
}

export default Header;
