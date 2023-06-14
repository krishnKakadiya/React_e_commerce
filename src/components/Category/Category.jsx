import { useNavigate } from "react-router-dom";
import "./Category.scss";
import Cat1 from "../../assetes/iphone.jpg"

const Category = ({ categories }) => {
    const navigate = useNavigate();
    return (
        <div className="shop-by-category">
            <div className="categories">
               <div className="category">
                <img src={Cat1} alt="" />
               </div>
               <div className="category">
                <img src={Cat1} alt="" />
               </div>
               <div className="category">
                <img src={Cat1} alt="" />
               </div>
               <div className="category">
                <img src={Cat1} alt="" />
               </div>
            </div>
        </div>
    );
};

export default Category;
