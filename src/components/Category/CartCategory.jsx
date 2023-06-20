// import { useParams } from "react-router-dom";
// import useFetch from "../../hooks/useFetch";
import Products from "../Products/Products";
import "./CartCategory.scss";
const   CartCategory = () => {
   
    return (
        <div className="category-main-content">
            <div className="layout">
                <div className="category-title">
                  category title
                </div>
                <Products innerPage = {true} />
            </div>
        </div>
    );
};

export default CartCategory;

