import React,{useState, useEffect,} from "react";
import "./Header.scss";

import { TbSearch } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { CgShoppingCart } from "react-icons/cg";

const Header = () => {

  const [scrolled, setScrolled] = useState(false);

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
    <div className={`main-header ${scrolled ? 'sticky-header' : '' }`}>
      <div className="header-content">
        <ul className="left">
          <li>Home</li> 
          <li>About</li>
          <li>Categories</li>
        </ul>
        <div className="center">KNOXStore</div>
        <div className="right">
          <TbSearch />
          <AiOutlineHeart />
          <span className="cart-icon">
            <CgShoppingCart />
            <span>5</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
