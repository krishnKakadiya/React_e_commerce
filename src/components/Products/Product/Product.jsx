import React, { useState } from "react";
import "./Product.scss";
import Pro from "../../../assetes/pink.jpg";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Product = ({ prodData, id }) => {
  const [ImageProductName, setImageProductName] = useState([]);

  const navigate = useNavigate();
  const handleClick = (id, prodData) => {
    // const navigate = useNavigate();
    navigate("/product/" + id, { state: { imageProductName: prodData } });
    //     onClick={() => {
    //     if (prodData) {
    //         setImageProductName(prodData);
    //     }
    // }}
    // onClick={()=> navigate('/product/' + id)}
  };
  console.log("ImageProductName", ImageProductName);
  // console.log("prod---->",prodData);
  return (
    <div
      key={id}
      className="product-card"
      onClick={() => handleClick(id, prodData)}
    >
      <div className="thumbnail">
        <img
          src={
            process.env.REACT_APP_STRIPE_APP_DEV_URL +
            prodData.img.data[0].attributes.url
          }
          alt=""
        />
      </div>
      <div className="prod-details">
        <span className="name">{prodData.title}</span>
        <span className="price">&#8377;{prodData.price}</span>
      </div>
    </div>
  );
};

export default Product;
//   const location = useLocation();
// const imageProductName = location.state?.imageProductName;
