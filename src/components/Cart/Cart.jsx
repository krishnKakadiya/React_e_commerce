import React from "react";
import "./Cart.scss";
import CartItem from "./CartItem/CartItem";

import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";

const Cart = ({ setShowCart }) => {
  // const handleClick = ()=> {
  //   setShowCart(false);
  //   console.log("statefalse");
  // }
  return (
    <div className="cart-panel">
      <div className="opac-layer"></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Shopping cart</span>
          <span className="close-btn" onClick={() => setShowCart(false)}>
            <MdClose />
            <span className="text">close</span>
          </span>
        </div>
        {/* <div className="empty-cart">
          <BsCartX />
          <span>
            No products in the cart...
          </span>
          <button className="return-cta"> Return to Shop</button>
        </div> */}
        <>
          <CartItem />
          <div className="cart-footer">
            <div className="subtotal">
              <span className="text">subTOAL:</span>
              <span className="text total">&#8377;899</span>
            </div>
            <div className="button">
              <button className="checkout-cta">
                chekout
              </button>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Cart;
