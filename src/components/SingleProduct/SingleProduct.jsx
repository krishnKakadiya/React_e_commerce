import React, { useState, useContext } from "react";
// import "../../css-config/mixins.scss";
import Prod from "../../assetes/pink.jpg";
import "./SingleProduct.scss";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import { useLocation } from 'react-router-dom';

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";
import { useParams } from "react-router-dom";

import useFetch from "../../Hooks/useFetch";
import { Context } from "../../Utils/Context";

const SingleProduct = () => {
  // const location = useLocation();
  // const imageProductName = location?.state?.imageProductName;
  // console.log('imageProductNameasd', imageProductName);

  const [quantity, setQuantity] = useState(1);

  const { handleAddToCart } = useContext(Context);
  
  const increment = () => {
    setQuantity((prevState) => prevState + 1);
  };
  const decrement = () => {
    setQuantity((prevState) => {
      if (prevState === 1) return 1;
      return prevState - 1;
    });
  };

  const { id } = useParams();
  // console.log("singleid:--------",id);

  const { data } = useFetch(`/api/prodcuts?populate=*&[filters][id]=${id}`); 
  
  /*here when use populate= for get meadia content use filter=upone fielid like here id on we run fileter then get id */

  // console.log("single-------------------------->",data);
  // console.log("image",data?.data[0]?.attributes?.img?.data[0]?.attributes.url);
  
  if (!data) return;
  const product = data?.data?.[0]?.attributes;
  // console.log("image", data?.data?.[0]?.attributes?.img?.data?.[0]?.attributes?.url);

  // const catId = product?.categories.data[0].attributes.id;
  // const catId = product?.categories?.data[0]?.id;
  // console.log("catID>>", catId);
  const pro = data?.data[0];
  console.log("product👌👌👍👍😂👍👍",pro);
  console.log("quantity👌👌👍👍😂👍👍",quantity);

  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img
              src={
                process.env.REACT_APP_STRIPE_APP_DEV_URL +
                product?.img?.data?.[0]?.attributes?.url
              }
              alt="singleproducts"
            />
          </div>
          <div className="right">
            <span className="name">{product?.title}</span>
            <span className="price"> {product?.price} &#8377;</span>
            <span className="desc">{product?.desc}</span>
            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span onClick={decrement}>-</span>
                <span>{quantity}</span>
                <span onClick={increment}>+</span>
              </div>
              <button
                className="add-to-cart-button"
                onClick={() => {
                  handleAddToCart(pro, quantity);
                  // handleAddToCart(data?.data[0], quantity);
                  // handleAddToCart(data?.data?.[0]?.attributes,product, quantity);
                  setQuantity(1);
                }}
              >
                <FaCartPlus size={20} />
                Add to Cart
              </button>
            </div>

            <span className="divider" />
            <div className="info-item">
              <span className="text-bold">
                Categorey:
                <span>{product?.categories?.data?.[0]?.attributes?.title}</span>
              </span>
              <span className="text-bold">
                Share:
                <span className="social-icons">
                  <FaFacebookF size={16} />
                  <FaTwitter size={16} />
                  <FaInstagram size={16} />
                  <FaLinkedinIn size={16} />
                  <FaPinterest size={16} />
                </span>
              </span>
            </div>
          </div>
        </div>
        <RelatedProducts
          productId={id}
          categoryId={product?.categories?.data[0]?.id}
        />
      </div>
    </div>
  );
};

export default SingleProduct;
