import React, { useContext } from "react";
import "./CartItem.scss";
import Cartp from "../../../assetes/new.jpg";
import { MdClose } from "react-icons/md";
import { Context } from "../../../Utils/Context";

const CartItem = () => {
  const {
    CartItems,
    handleAddCart,
    handleremoveCart,
    handleCartProductQuantity,
  } = useContext(Context);

console.log("cartItems:>>>>>>>>>>>>>>>>>>>>",CartItems);
   
  return (
    <div className="cart-products">
      {CartItems.map((item) => {
        return (
          <div key={item.id} className="cart-product">
            <div className="image-container">
              <img src={Cartp} alt="" />
            </div>
            <div className="prod-details">
              <span className="name">{item.attributes.title}</span>
              <MdClose
                className="close-btn"
                onClick={() => handleremoveCart(item)}
              />
              <div className="quantity-buttons">
                <span onClick={() => handleCartProductQuantity("desc", item)}>
                  -
                </span>

                {/* <span>{item.attributes.quantity}</span> */}

                <span onClick={() => handleCartProductQuantity("inc", item)}>
                  +
                </span>
              </div>
              <div className="text">
                <span>3</span>
                <span>x</span>
                <span className="highlight">&#8377;899</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartItem;
