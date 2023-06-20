import React from 'react';
import "./Product.scss";
import Pro from "../../../assetes/pink.jpg";



const Product = ({prodData , id}) => {
  console.log("prod---->",prodData);
  return (
    <div key={id} className='product-card'>
    <div className="thumbnail">
     <img src={
         process.env.REACT_APP_STRIPE_APP_DEV_URL +
         prodData.img.data[0].attributes.url
     } alt="" />

    </div>
      <div className="prod-details">
        <span className="name">
        {prodData.title}
        </span>
        <span className="price">
          &#8377;{prodData.price}
        </span>
      </div>


    </div>
  )
}

export default Product