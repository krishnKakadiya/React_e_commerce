import { useParams } from "react-router-dom";
// import useFetch from "../../hooks/useFetch";
import Products from "../Products/Products";
import "./CartCategory.scss";
import useFetch from './../../Hooks/useFetch';
// import Product from './../Products/Product/Product';
const  CartCategory = () => {

    const {id} = useParams();

    const { data } = useFetch(`/api/prodcuts?populate=*&[filters][categories][id]=${id}`)
   
     console.log("CartCategory👍",data);
    return (
        <div className="category-main-content">
            <div className="layout">
                <div className="category-title">
                 
                    {
                        data?.data?.[0]?.attributes?.categories?.data?.[0]
                            ?.attributes?.title
                    }
                 
                </div>
                <Products innerPage={true} products={data} />
            </div>
        </div>
    );
};

export default CartCategory;

