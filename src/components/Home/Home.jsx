import React,{useContext, useEffect} from 'react'
import './Home.scss';
import Banner from './Banner/Banner';
import Category from '../Home/Category/Category';
import Products from '../Products/Products';
import { Context } from '../../Utils/Context';
import { fetchDataFromApi } from '../../Utils/api';

const Home = () => {
  const { products, setProducts, categories, setCategories } = useContext(Context);

useEffect(() => {
  getProducts();
  getCategories();
}, []);

const getProducts = () => {
  fetchDataFromApi("/api/products?populate=*").then((res) => {
      setProducts(res);
  });
};
const getCategories = () => {
  fetchDataFromApi("/api/categories?populate=*").then((res) => {
      setCategories(res);
  });
};

return (
  <div>
      <Banner />
      <div className="main-content">
          <div className="layout">
              <Category categories={categories} />
              <Products
                  headingText="Popular Products"
                  products={products}
              />
          </div>
      </div>
  </div>
);
};

export default Home