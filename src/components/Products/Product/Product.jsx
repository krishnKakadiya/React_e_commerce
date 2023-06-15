import React from 'react';
import "./Product.scss";
import Pro from "../../../assetes/product.jpg";



const Product = () => {
  return (
    <div className='product-card'>
    <div className="thumbnail">
     <img src={Pro} alt="" />

    </div>
      <div className="prod-details">
        <span className="name">
          product name
        </span>
        <span className="price">
          &#8377;899
        </span>
      </div>


    </div>
  )
}

export default Product