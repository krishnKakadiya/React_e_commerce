import React from "react";
import "./Search.scss";
import { MdClose } from "react-icons/md";
import Result from "../../../assetes/product.jpg";

const Search = ({ setShowSearch }) => {
  return (
    <div className="search-modal">
      <div className="form-field">
        <input type="text" autoFocus placeholder="serch for products" />

        <MdClose className="close-btn" onClick={() => setShowSearch(false)} />
      </div>
      <div className="search-result-content">
        <div className="search-results">
          <div className="search-result-item">
            <div className="img-container">
              <img src={Result} alt="" />
            </div>
            <div className="prod-details">
              <span className="name">
                Product name
              </span>
              <span className="desc">
                description
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
