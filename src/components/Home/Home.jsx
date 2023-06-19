import React, { useEffect, useContext } from "react";
import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "../Home/Category/Category";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../Utils/api";
import { Context } from "../../Utils/Context";

const Home = () => {
  const { categories, setCategories,products,setProducts } = useContext(Context);
   console.log(categories);
  useEffect(() => {
    // getProducts();
    geCategoreis();
  }, []); 
  

  /*here  fetchdatafromapi func take url show in api.js  */

  // const getProducts = () => {
  //   fetchDataFromApi("/api/prodcut?populate=*").then((res) => {
  //     console.log(res);
  //     setProducts(res);
  //   });
  // };
  
  const geCategoreis = () => {
    fetchDataFromApi("/api/categories?populate=*").then((res) => {
      console.log("Api res:>>",res);
      setCategories(res);
      const image = res?.data[0].attributes.img.data.attributes.url;
      console.log("img:>>",image);
      // console.log("res:>>",response);
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

      /*here show only like api/categories the imag not come we add ? like query paramerter for strapi may be is inbuild populate=* */