import React, { useEffect, useContext } from "react";
import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "../Home/Category/Category";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../Utils/api";
import { Context } from "../../Utils/Context";

const Home = () => {
  const { categories, setCategories,products,setProducts } = useContext(Context);

  useEffect(() => {
    // getProducts();
    geCategoreis();
  }, []); 
  

  /*here  fetchdatafromapi func take url show in api.js  */

  // const getProducts = () => {
  //   fetchDataFromApi("/api/products?populate=*").then((response) => {
  //     console.log(response);
  //     setProducts(response);
  //     // console.log("response:>>",response);
  //   });
  // };
  
  /*here show only like api/categories the imag not come we add ? like query paramerter for strapi may be is inbuild populate=* */
  const geCategoreis = () => {
    fetchDataFromApi("/api/categories?populate=*").then((response) => {
      console.log("Api res:>>",response);
      setCategories(response);
      const image = response?.data[0].attributes.img.data.attributes.url;
      console.log("img:>>",image);
      // console.log("response:>>",response);
    });
  };  
  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
        
          <Category categories={categories} />
          <Products headingText="Popular products" products={products} />
        </div>
      </div>
    </div>
  );
};

export default Home;
