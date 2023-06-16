import React from "react";
import "./Cart.scss";

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
          </span>
          <span className="text">close</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
