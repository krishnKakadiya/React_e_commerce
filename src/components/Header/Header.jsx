import React,{useState, useEffect,} from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

import { TbSearch } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { CgShoppingCart } from "react-icons/cg";
import Cart from "../Cart/Cart";
import Search from "./Search/Search";

const Header = () => {

  const [scrolled, setScrolled] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

const handleScroll = () => {
  const offset = window.scrollY;
  // console.log("offsetY:>>",offset);
  if(offset > 200){
   setScrolled(true);
  }else{
    setScrolled(false);
  }
}

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <>

    <header className={`main-header ${scrolled ? 'sticky-header' : '' }`}>
      <div className="header-content">
        <ul className="left">
          {/* <Link to='/'>Home</Link>  */}
          {/* <Link to='/product/:id'>Singleproduct</Link> */}
          <li>home</li>
          <li>SingleProduct</li>
          <li>categories</li>
          {/* <Link to="/category/:id">Categories</Link> */}
        </ul>
        <div className="center">KNOXStore</div>
        <div className="right">
          <TbSearch onClick={()=> setShowSearch(true)}/>
          <AiOutlineHeart />
          <span className="cart-icon" onClick={() => setShowCart(true)}>
            <CgShoppingCart />
            <span>5</span>
          </span>
        </div> 
      </div>
    </header>
    {showCart && <Cart setShowCart={setShowCart} />}
    {showSearch && <Search setShowSearch={setShowSearch} />}
    </>
  );
};

export default Header;
