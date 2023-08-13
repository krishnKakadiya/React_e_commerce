
import React, { useEffect,useState } from "react";
import "./App.scss";
/* laibrary*/
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* components */
import Home from "./components/Home/Home";
import CartCategory from "./components/Category/CartCategory";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import AppContext from "./Utils/Context";

function App() {
  const [renderCount, setRenderCount] = useState(0);

  useEffect(() => {
    // Increment the render count on each render
    setRenderCount(prevCount => prevCount+1);
  },[]);
  
  return (
    <Router>
      <AppContext>
        <Header render={renderCount} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category/:id" element={<CartCategory />} />
              <Route path="/product/:id" element={<SingleProduct />} />
            </Routes>
            <Newsletter />
        <Footer />
      </AppContext> 
    </Router>
  );
}

export default App;

