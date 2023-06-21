import React, { useContext } from "react";
import "./Cart.scss";
import CartItem from "./CartItem/CartItem";

import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import { Context } from "../../Utils/Context";
import { useNavigate } from "react-router-dom";

const Cart = ({ setShowCart }) => {
  // const handleClick = ()=> {
  //   setShowCart(false);
  //   console.log("statefalse");
  // }

// const navigate = useNavigate();



  const { cartItems, cartSubTotal } = useContext(Context);
  
   console.log("cartTotal:>",cartSubTotal);
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

        {!cartItems?.length && (
  <div className="empty-cart">
    <BsCartX />
    <span>No products in the cart...</span>
    <button className="return-cta">Return to Shop</button>
  </div>
)}
      
{cartItems?.length && (
  <>
    <CartItem />
    <div className="cart-footer">
      <div className="subtotal">
        <span className="text">subTOAL:</span>
        <span className="text total">&#8377;{cartSubTotal}</span>
      </div>
      <div className="button">
        <button className="checkout-cta">Checkout</button>
      </div>
    </div>
  </>
)}
        
      </div>
    </div>
  );
};

export default Cart;
