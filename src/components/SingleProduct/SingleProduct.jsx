import React from "react";
// import "../../css-config/mixins.scss";
import Prod from "../../assetes/pink.jpg";
import "./SingleProduct.scss";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
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

const SingleProduct = () => {

  const {id}= useParams();
  console.log("singleid:--------",id);

  const {single} = useFetch();
  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img src={Prod} alt="" />
          </div>
          <div className="right">
            <span className="name"> Product name</span>
            <span className="price"> Price</span>
            <span className="desc">Description</span>
            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span>+</span>
                <span>5</span>
                <span>-</span>
              </div>
              <button className="add-to-cart-button">
                <FaCartPlus size={20} />
                Add to Cart
              </button>
            </div>

            <span className="divider" />

            <div className="info-item">
              <span className="text-bold">
                Categorey:
                <span>headphones</span>
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
        <RelatedProducts />
      </div>
    </div>
  );
};

export default SingleProduct;
