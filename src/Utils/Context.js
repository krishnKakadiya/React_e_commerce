import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Context = createContext();

const AppContext = ({ children }) => {
  const [categories, setCategories] = useState();
  const [products, setProducts] = useState();
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartSubTotal, setCartSubTotal] = useState(0);

  const location = useLocation();

  useEffect(() => {}, [cartItems]);

  const handleAddCart = (product, quantity) => {
    let items = [...cartItems];
    let index = items.findIndex((p) => p.id == product.id);
    if (index !== -1) {
      items[index].attributes.quantity += quantity;
    } else {  
      product.attributes.quantity = quantity;
      items = [...items, product];
    }

    setCartItems(items);
  };
  const handleRemoveCart = (product) => {
    let items = [...cartItems];
    let index = items.fliter((p) => p.id !== product.id);
    setCartItems(items);
  };
  const handleCartProductQuantity = (product, quantity) => {};

  /*here we create which or those state we passed in child component globally */
  return (
    <Context.Provider
      value={{
        categories,
        setCategories,
        products,
        setProducts,
        cartItems,
        setCartItems,
        cartCount,
        setCartCount,
        cartSubTotal,
        setCartSubTotal,
        handleAddCart,
        handleRemoveCart,
        handleCartProductQuantity,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
