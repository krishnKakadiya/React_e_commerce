import React,{useState, useEffect, useContext,} from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

import { TbSearch } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { CgShoppingCart } from "react-icons/cg";
import Cart from "../Cart/Cart";
import Search from "./Search/Search";
import { useNavigate } from "react-router-dom";
import { Context } from "../../Utils/Context";


const Header = () => {

  const {cartCount, showCart, setShowCart} = useContext(Context);

  const [scrolled, setScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();

const handleScroll = () => {
  const offset = window.scrollY;
  // console.log("offsetY:>>",offset);
  if(offset > 120){
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
          <li onClick={()=> navigate("/")}>home</li>
          <li>SingleProduct</li>
          <li>categories</li>
          {/* <Link to="/category/:id">Categories</Link> */}
        </ul>
        <div className="center" onClick={()=> navigate("/")}>KNOXStore</div>
        <div className="right">
          <TbSearch onClick={()=> setShowSearch(true)}/>
          <AiOutlineHeart />
          <span className="cart-icon" onClick={() => setShowCart(true)}>
            <CgShoppingCart />
            {!!cartCount && <span>{cartCount}</span>}
          </span>
        </div> 
      </div>
    </header>
    {showSearch && <Search setShowSearch={setShowSearch} />}
    {/* {showCart && <Cart />} */}
    {showCart && <Cart setShowCart={setShowCart} />}
    </>
  );
};

export default Header;
