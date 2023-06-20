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

  const {data} = useFetch(`/api/prodcuts?populate=*&[filters][id]=${id}`)  /*here when use populate= for get meadia content use filter=upone fielid like here id on we run fileter then get id */
console.log("single-------------------------->",data);
// console.log("image",data?.data[0]?.attributes?.img?.data[0]?.attributes.url);
console.log("image", data?.data?.[0]?.attributes?.img?.data?.[0]?.attributes?.url);
  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img src={
                process.env.REACT_APP_STRIPE_APP_DEV_URL + data?.data?.[0]?.attributes?.img?.data?.[0]?.attributes?.url
            } alt="singleproducts" />
          </div>
          <div className="right">
            <span className="name">{data?.data?.[0]?.attributes?.title}</span>
            <span className="price"> {data?.data?.[0]?.attributes?.price}</span>
            <span className="desc">{data?.data?.[0]?.attributes?.desc}</span>
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
