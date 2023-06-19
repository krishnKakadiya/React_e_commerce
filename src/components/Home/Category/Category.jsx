  
  import React from "react";
  import { useNavigate } from "react-router-dom";
  import "./Category.scss";
  import Cat1 from "../../../assetes/iphone.jpg";

  const Category = ({ categories }) => {
    console.log("catpage:>>",categories);
    const navigate = useNavigate(); 
    return (
      <div className="shop-by-category">
        <div className="categories">
          {categories?.data?.map((item) => {
            <div  key={item?.id}  className="category">
              <img
                src={
                  process.env.REACT_APP_STRIPE_APP_DEV_URL +
                  item?.attributes.img.data.attributes.url     
                }
                alt=""
              />
            </div>;   
          })}
        </div>
      </div>
    );
  };

export default Category;

        {/* <div className="category">
          <img src={Cat1} alt="" />
        </div>
        <div className="category">
          <img src={Cat1} alt="" />
        </div>
        <div className="category">
          <img src={Cat1} alt="" />
        </div> */}