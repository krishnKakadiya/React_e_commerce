import React, { useContext } from "react";
import "./CartItem.scss";
import Cartp from "../../../assetes/new.jpg";
import { MdClose } from "react-icons/md";
import { Context } from "../../../Utils/Context";

const CartItem = () => {
  const { cartItems, handleRemoveCart, handleCartProductQuantity } = useContext(Context);
                                                                   

  console.log("handlecartItems.jsx:>>>>>>>>>>>>>>>>>>>>", cartItems);

  // console.log("cartItems:>>>>>>>>>>>>>>>>>>>>",id);

  return (
    <div className="cart-products">
      {cartItems.map((item) => {
          
           return( <div className="cart-product" key={item?.id} >
          <div className="image-container">
            <img
              src={
                process.env.REACT_APP_STRIPE_APP_DEV_URL +
                item?.attributes?.img?.data?.[0]?.attributes?.url
                // item?.img?.data?.[0]?.attributes.url
              }
              alt=""
            />
          </div>
          <div className="prod-details">
            <span className="name">{item?.title}</span>
            <MdClose
              className="close-btn"
              onClick={() => handleRemoveCart(item)}
            />
            <div className="quantity-buttons">
              <span onClick={() => handleCartProductQuantity("dec", item)}>
                -
              </span>

              <span>{item.attributes.quantity}</span>

              <span onClick={() => handleCartProductQuantity("inc", item)}>
                +
              </span>
            </div>
            <div className="text">
              <span>{item?.attributes?.quantity}</span>
              <span>x</span>
              {/* <span className="highlight">&#8377;899</span> */}
              <span className="highlight">&#8377;{item?.attributes?.price}</span>
            </div>
          </div>
        </div>
      )
      })}
    </div>
  );
};

export default CartItem;

{
  /* {CartItems?.map((item) => (
        <div
            className="search-result-item"
            key={item.id}
            onClick={() => {}}
        >
            <div className="image-container">
                <img
                    src={
                        process.env.REACT_APP_STRIPE_APP_DEV_URL +
                        item.attributes.image.data[0].attributes.url
                    }
                />
            </div>
            <div className="prod-details">
                <span className="name">{item.attributes.title}</span>
                <MdClose
                    className="close-btn"
                    onClick={() => handleremoveCart(item)}
                />
                <div className="quantity-buttons">
                    <span
                        onClick={() =>
                            handleCartProductQuantity("dec", item)
                        }
                    >
                        -
                    </span>
                    <span>{item.attributes.quantity}</span>
                    <span
                        onClick={() =>
                            handleCartProductQuantity("inc", item)
                        }
                    >
                        +
                    </span>
                </div>
                <div className="text">
                    <span>{item.attributes.quantity}</span>
                    <span>x</span>
                    <span className="highlight">
                        <span>&#8377;</span>
                        {item.attributes.price *
                            item.attributes.quantity}
                    </span>
                </div>
            </div>
        </div>
    ))} */
}
