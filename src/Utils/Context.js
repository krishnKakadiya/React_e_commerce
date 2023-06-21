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


  const handleAddCart = (product, quantity) => {
    console.log("handleAddproduct:>>>>>>", product);
    console.log("handlequantity:>>>>>>", quantity);
    
    let items = [...cartItems];                                    /*shallow copy of cartItmes */
    let index = items?.findIndex((p)=> p.id === product.id);
    if (index !== -1) {
      items[index].attributes.quantity += quantity;
    } else {
      // product.attributes.quantity = quantity;
      product.attributes = { quantity: quantity };// Create attributes object with quantity property//
      items = [...items, product];
    }
    setCartItems(items);
    console.log("handleitems:>>>>>>", items,"index",index,"product.attributes:>",product.attributes );
    
  };
  // const handleAddCart = (product, quantity) => {
    // if (index !== -1) {
    //   if (items[index].attributes) {
    //     items[index].attributes.quantity += quantity;
    //   } else {
    //     items[index].attributes = { quantity: quantity };
    //   }
    // } else {
    //   product.attributes = { quantity: quantity };
    //   items = [...items, product];
    // }
  //   let items = [...cartItems]; // Shallow copy of cartItems
  //   let index = items.findIndex((p) => p.id === product.id);

  //   if (index !== -1) {
  //     items[index] = { ...items[index],
  //       attributes: {
  //         ...items[index].attributes,
  //         quantity: items[index].attributes.quantity + quantity,
  //       },
  //     };
  //   } else {
  //     const newProduct = {
  //       ...product,
  //       attributes: {
  //         ...product.attributes,
  //         quantity: quantity,
  //       },
  //     };
  //     items = [...items, newProduct];
  //   }

  //   setCartItems(items);
  // };

  const handleRemoveCart = (product) => {
    let items = [...cartItems];
    items = items?.filter((p)=> p.id !== product.id);
    setCartItems(items);
  };

  // const handleCartProductQuantity = (product, type) => {};

  const handleCartProductQuantity = (type, product) => {
    let items = [...cartItems];
    let index = items?.findIndex((p) => p.id === product?.id);
    if (type === "inc") {
        items[index].attributes.quantity += 1;
    } else if (type === "dec") {
        if (items[index].attributes.quantity === 1) return;
        items[index].attributes.quantity -= 1;
    }
    setCartItems(items);
};

  useEffect(() => {
    handleAddCart(cartItems);
    console.log("App running:>>>>>>>>>>>>>🔙🔙🔙🔙🔙🔙🔙🔙🔙🔙🔙");
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
}, [location]);

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
