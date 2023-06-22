import React, { useState } from "react";
import "./Search.scss";
import { MdClose } from "react-icons/md";
import Result from "../../../assetes/product.jpg";
import useFetch from "../../../Hooks/useFetch";
import { useNavigate } from "react-router-dom";

const Search = ({ setShowSearch }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const onChange = (e) => {
    setQuery(e.target.value);
    console.log("event", e.target.value);

  };
  let { data } = useFetch(
    `/api/prodcuts?populate=*&filters[title][$contains]=${query}`
  );

  console.log(
    "seracthdataurl:>>",
    data?.data[0]?.attributes?.img.data[0]?.attributes?.url
  );
  console.log("serachtitle:>>", data?.data[0]?.attributes?.title);
  console.log("serachprice:>>", data?.data[0]?.attributes?.price);

  if (!query.length) {
    data = null;
  }

  return (
    <div className="search-modal">
      <div className="form-field">
        <input
          autoFocus
          type="text"
          placeholder="Search for products"
          value={query}
          onChange={onChange}
        />
        <MdClose className="close-btn" onClick={() => setShowSearch(false)} />
      </div>
      <div className="search-result-content">
        {!data?.length && (
          <div className="start-msg">
            Start typing to see products you are looking for.
          </div>
        )}
        <div className="search-results">
          {data?.data.map((item) => (
            <div
              className="search-result-item"
              key={item.id}
              onClick={() => {
                navigate("/product/" + item.id);
                setShowSearch(false);
              }}
            >
              <div className="image-container">
                <img
                  src={
                    process.env.REACT_APP_STRIPE_APP_DEV_URL +
                    item?.attributes?.img.data[0]?.attributes?.url
                  }
                />
              </div>
              <div className="prod-details">
                <span className="name">{item?.attributes?.title}</span>
                <span className="desc">{item?.attributes?.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Search;

// const Search = ({ setShowSearch }) => {
//   return (
//     <div className="search-modal">
//       <div className="form-field">
//         <input type="text" autoFocus placeholder="serch for products" />

//         <MdClose className="close-btn" onClick={() => setShowSearch(false)} />
//       </div>
//       <div className="search-result-content">
//         <div className="search-results">
//           <div className="search-result-item">
//             <div className="img-container">
//               <img src={Result} alt="" />
//             </div>
//             <div className="prod-details">
//               <span className="name">
//                 Product name
//               </span>
//               <span className="desc">
//                 description
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
