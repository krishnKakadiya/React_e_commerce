import React, { useEffect, useContext } from "react";
import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "../Home/Category/Category";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../Utils/api";
import { Context } from "../../Utils/Context";
import { SuccessToast } from "../../helper/toast";
import { Toaster } from "react-hot-toast";

const Home = () => {
  const { categories, setCategories, products, setProducts } = useContext(Context);


  //  console.log(categories);

  // useEffect(() => {
  //   getProducts();
  //   geCategoreis();
  //   // console.log("homejsx render");
  // }, []);

  /*here  fetchdatafromapi func take url show in api.js  */

  const getProducts = () => {
    fetchDataFromApi("/api/prodcuts?populate=*").then((res) => {
      console.log("Prodcutres-->:",res);
      SuccessToast("Products add successfully!")

      setProducts(res);
      // console.log('prodimge---------->',res.data[0].attributes.img.data[0].attributes.url);
    });
  }; 
  useEffect(() => {
getProducts();
  }, [])
  
  
  const geCategoreis = () => {
    fetchDataFromApi("/api/categories?populate=*").then((res) => {
      setCategories(res);
      SuccessToast("Catergories add successfully!")
      console.log("catres:", res);
      // const image = res?.data[0].attributes.img.data.attributes.url;
      // const image = res?.data[0].attributes.prodcuts.data[0].attributes.title;
      // console.log("img:>>",image);
    });
  };
  useEffect(() => {
    geCategoreis();
  }, [])

  return (
  <div>
 <Toaster   position="top-right"
  reverseOrder={false}
  gutter={8}
  containerClassName=""
  containerStyle={{}}
  toastOptions={{
    // Define default options
    className: '',
    duration: 2000,
    style: {
      background: '#363636',
      color: '#fff',
    },

    // Default options for specific types
    success: {
      duration: 2000,
      theme: {
        primary: 'green',
        secondary: 'black',
      },
    },
  }} />
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category categories={categories} />
          <Products headingText="Popular products" products={products} />
        </div>
      </div>
    </div>
  </div>
  );
};

export default Home;

/*here show only like api/categories the imag not come we add ? like query paramerter for strapi may be is inbuild populate=* */
