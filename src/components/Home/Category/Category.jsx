// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./Category.scss";
// import Cat1 from "../../../assetes/iphone.jpg";

// const Category = ({ categories }) => {
//   console.log("catpage:>>", categories);
//   const navigate = useNavigate();
//   return (
//     <div className="shop-by-category">
//       <div>hello</div>
//       <div className="categories">
//         {categories &&
//           categories?.data?.map((item) => {
//             console.log('categories',categories)
//             {
//               /* {
//             console.log("item", item.attributes.img.data.attributes.url);
//           }
//           {
//             console.log(
//               "process",
//               process.env.REACT_APP_STRIPE_APP_DEV_URL +
//                 item?.attributes.img.data.attributes.url
//             );
//           } */
//             }
//             <div>
//               <div>hello000000</div>
//               <div className="category">
//                 <img
//                   src={
//                     process.env.REACT_APP_STRIPE_APP_DEV_URL +
//                     item?.attributes.img.data.attributes.url
//                   }
//                   alt="error"
//                 />
//               </div>
//               ;
//             </div>;
//           })}
//       </div>
//     </div>
//   );
// };

// export default Category;
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Category.scss";

// import Cat1 from "../../../assetes/iphone.jpg";
import { InformToast, SuccessToast } from './../../../helper/toast';
import { Toaster } from "react-hot-toast";

const Category = ({ categories }) => {
  console.log("catpage:>>", categories);
  const navigate = useNavigate();

  const handleNavigate=(id)=>{
    navigate(`/category/${id}`);
    if(id === 1){
    id = "headphones"
    }else if(id == 2){
      id = "earbuds"
    }else if(id == 3){
      id = "speakers"
    }else{
      id = "smart watches"
    }
    SuccessToast(`show amzing variations in  ${id} category`);
  }

  
  return (
    <div>
       <Toaster   position="top-right"
  reverseOrder={false}
  gutter={8}
  containerClassName=""
  containerStyle={{}}
  toastOptions={{
    // Define default options
    className: '',
    duration: 2000,
    style: {
      background: '#363636',
      color: '#fff',
    },

    // Default options for specific types
    success: {
      duration: 1000,
      theme: {
        primary: 'green',
        secondary: 'black',
      },
    },
    // custom:{
    //   duration: 1000,
    //   theme:{
    //     primary: 'yellow',
    //     secondary: "blue",
    //   }
    // },
  }} />

    <div className="shop-by-category">
      
      <div className="categories">
        {categories &&
          categories?.data?.map((item) => {
            return (
              <div
                key={item.id}
                className="category"
                onClick={()=>handleNavigate(item.id)}
                // onClick={() => navigate(`/category/${item.id}`)}
                >
                <img
                  src={
                    process.env.REACT_APP_STRIPE_APP_DEV_URL +
                    item?.attributes.img.data.attributes.url
                  }
                  alt="error"
                />
                <p></p>
              </div>
            );
          })}
      </div>
    </div>
  </div>
  );
};

export default Category;

{
  /* console.log('categories',categories) */
}
{
  /* <div className="category">
  <img src={Cat1} alt="" />
  </div>
        <div className="category">
          <img src={Cat1} alt="" />
        </div>
        <div className="category">
          <img src={Cat1} alt="" />
        </div> */
}
