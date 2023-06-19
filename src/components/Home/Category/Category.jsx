import { useNavigate } from "react-router-dom";
import "./Category.scss";
import Cat1 from "../../../assetes/iphone.jpg";

const Category = ({ categories }) => {
  const navigate = useNavigate();
  return (
    <div className="shop-by-category">
      <div className="categories">
        {categories?.data?.map((item) => {
          <div   className="category">
            <img key={item.id}
              src={
                process.env.REACT_APP_STRIPE_APP_DEV_URL +
                item.attributes.img.data.attributes.url     
              }
              alt="categoriesdataimage"
            />
          </div>;   
        })}
        {/* <div className="category">
          <img src={Cat1} alt="" />
        </div>
        <div className="category">
          <img src={Cat1} alt="" />
        </div>
        <div className="category">
          <img src={Cat1} alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default Category;
