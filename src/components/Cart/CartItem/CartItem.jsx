import React from 'react';
import "./CartItem.scss";
import Cartp from "../../../assetes/new.jpg"
import { MdClose } from 'react-icons/md';

const CartItem = () => {
  return (
    <div className='cart-products'>
    <div className="cart-product">
      <div className="image-container">
        <img src={Cartp} alt="" />
      </div>
      <div className="prod-details">
        <span className="name">Product name</span>
        <MdClose  className='close-btn'/>
        <div className="quantity-buttons">
          <span>-</span>
          <span>5</span>
          <span>+</span>
        </div>
        <div className="text">
          <span>3</span>
          <span>x</span>
          <span className='highlight'>&#8377;899</span>
        </div>
      </div>
    </div>
     
    </div>
  )
}

export default CartItem