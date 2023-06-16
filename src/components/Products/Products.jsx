import React from "react";
import "./Products.scss";
import Product from "./Product/Product";
// import Category from '../Category/CartCategory';

const Products = ({ innerPage, headingText }) => {
  return (
    <div className="products-container">
      {!innerPage && <div className="sec-heading">{headingText}</div>}
      <div className="products">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default Products;

        {/* <Category /> */}