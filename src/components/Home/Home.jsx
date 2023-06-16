import React from 'react'
import './Home.scss';
import Banner from './Banner/Banner';
import Category from '../Home/Category/Category';
import Products from '../Products/Products';

const Home = () => {
  return (
    <div>
      <Banner />
    <div className="main-contenet">
       <div className="layout">
        <Category />
        <Products headingText="Popular products" />
       </div>
    </div>
    </div>
  )
}

export default Home