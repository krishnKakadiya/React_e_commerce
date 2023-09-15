// import { createContext, useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";

// export const Context = createContext();

// const AppContext = ({ children }) => {
//   const [categories, setCategories] = useState();
//   const [products, setProducts] = useState();
//   const [cartItems, setCartItems] = useState([]);
//   const [cartCount, setCartCount] = useState(0);
//   const [cartSubTotal, setCartSubTotal] = useState(0);

//   const location = useLocation();

//   const handleAddCart = (product, quantity) => {
//     console.log("handleAddproduct:>>>>>>", product);
//     console.log("handlequantity:>>>>>>", quantity);

//     let items = [...cartItems]; // Shallow copy of cartItems
//   let index = items.findIndex((p) => p.id === product.id);
// console.log("index", index);

// if (index !== -1) {
//   items[index].attributes.quantity += quantity;
//   console.log('items', items);
// } else {
//   // Create attributes object with quantity propertyf
//   const newProduct = { ...product, attributes: { quantity: quantity } };
//   items = [...items, newProduct];
//   console.log("newproduct:>>>", newProduct);
// }

// setCartItems(items);

//     // let items = [...cartItems]; /*shallow copy of cartItmes */
//     // let index = items?.findIndex((p) => p.id === product.id);
//     // console.log("index",index);
//     // if (index !== -1) {

//     //   items[index].attributes.quantity += quantity;
//     //   items = [...items, product];
//     //   console.log('items',items);
//     // } else {

//     //   // product.attributes.quantity = quantity;/
//     //   product.attributes = { quantity: quantity }; // Create attributes object with quantity property//
//     //   items = [...items, product];
//     // }
//     // setCartItems(items);

//     console.log("cartItems:>>>",cartItems);
//     console.log("handleitems:>>>",items);
//   };
//   // console.log("handleitems:>>>>>>",items,"index",index,"product.attributes:>",product.attributes);
//   // const handleAddCart = (product, quantity) => {
//   // if (index !== -1) {
//   //   if (items[index].attributes) {
//   //     items[index].attributes.quantity += quantity;
//   //   } else {
//   //     items[index].attributes = { quantity: quantity };
//   //   }
//   // } else {
//   //   product.attributes = { quantity: quantity };
//   //   items = [...items, product];
//   // }
//   //   let items = [...cartItems]; // Shallow copy of cartItems
//   //   let index = items.findIndex((p) => p.id === product.id);

//   //   if (index !== -1) {
//   //     items[index] = { ...items[index],
//   //       attributes: {
//   //         ...items[index].attributes,
//   //         quantity: items[index].attributes.quantity + quantity,
//   //       },
//   //     };
//   //   } else {
//   //     const newProduct = {
//   //       ...product,
//   //       attributes: {
//   //         ...product.attributes,
//   //         quantity: quantity,
//   //       },
//   //     };
//   //     items = [...items, newProduct];
//   //   }

//   //   setCartItems(items);
//   // };

//   const handleRemoveCart = (product) => {
//     let items = [...cartItems];
//     items = items?.filter((p) => p.id !== product.id);
//     setCartItems(items);
//   };

//   // const handleCartProductQuantity = (product, type) => {};

//   const handleCartProductQuantity = (type, product) => {
//     let items = [...cartItems];
//     let index = items?.findIndex((p) => p.id === product?.id);
//     if (type === "inc") {
//       items[index].attributes.quantity += 1;
//     } else if (type === "dec") {
//       if (items[index].attributes.quantity === 1) return;
//       items[index].attributes.quantity -= 1;
//     }
//     setCartItems(items);
//   };

//   useEffect(() => {
//     handleAddCart();
//     console.log("App running:>>>>>>>>>>>>>🔙🔙🔙🔙🔙🔙🔙🔙🔙🔙🔙");
//   }, [cartItems]);

//   useEffect(() => {
//     let subTotal = 0;
//     cartItems.map(
//       (item) =>
//         (subTotal += item?.attributes?.quantity * item?.attributes.price)
//     );
//     setCartSubTotal(subTotal);
//     console.log("subtotal:>>", subTotal);
//   }, [cartItems]);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [location]);

//   /*here we create which or those state we passed in child component globally */
//   return (
//     <Context.Provider
//       value={{
//         categories,
//         setCategories,
//         products,
//         setProducts,
//         cartItems,
//         setCartItems,
//         cartCount,
//         setCartCount,
//         cartSubTotal,
//         setCartSubTotal,
//         handleAddCart,
//         handleRemoveCart,
//         handleCartProductQuantity,
//       }}
//     >
//       {children}
//     </Context.Provider>
//   );
// };

// export default AppContext;

import { useEffect } from "react";
import { createContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { RemoveToast, SuccessToast } from "../helper/toast";
// import { v4 as uuidv4 } from 'uuid';

export const Context = createContext();

const AppContext = ({ children }) => {
  const [categories, setCategories] = useState();
  const [products, setProducts] = useState();
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartSubTotal, setCartSubTotal] = useState(0);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    let count = 0;
    cartItems?.map((item) => (count += item.attributes.quantity));
    setCartCount(count);
    console.log("count", count);

    let subTotal = 0;
    cartItems.map(
      (item) =>
        (subTotal = item?.attributes?.price * item?.attributes?.quantity)
    );
    setCartSubTotal(subTotal);
    console.log("subTotal:>>", subTotal);
  }, [cartItems]);

  const handleAddToCart = (product, quantity) => {
    console.log("handleAddproduct:>>>>>>", product);
    console.log("handlequantity:>>>>>>", quantity);

    let items = [...cartItems];

    let index = items?.findIndex((p) => p?.id === product?.id);
    console.log("index", index);
    if (index !== -1) {
      items[index].attributes.quantity += quantity;
      SuccessToast("add quantity");
    } else {
      product.attributes.quantity = quantity;
      // product.attributes = { quantity : quantity }
      items = [...items, product];
      console.log("items", items);
      SuccessToast("add new item in cart");
    }
    setCartItems(items);
    console.log("handleitems", items);
  };

  //     const handleAddToCart = (product, quantity) => {
  //       console.log("handleAddproduct:>>>>>>", product);
  //       console.log("handlequantity:>>>>>>", quantity);

  //       let items = [...cartItems];
  //       console.log('handle...cartItems', [...cartItems])

  //       let index = items.findIndex((p) => p.id === product.id);
  //       console.log('handleindex', index)

  //       if (index !== -1) {
  //           // Item already exists in the cart, increase the quantity
  //           items[index].attributes.quantity += quantity;
  //           console.log("handleunif");
  //       } else {
  //           // Item doesn't exist in the cart, add it as a new item
  //           const newItem = {
  //               ...product,
  //               attributes: { quantity: quantity}
  //             //   attributes: { quantity: quantity,  id: uuidv4()}
  //           };
  //           items = [...items, newItem]
  //           console.log('handlenewItem', [...items])
  //       }
  //       setCartItems(items);
  //       console.log('handleitems', items)
  //   };

  // const handleAddToCart = (product, quantity) => {
  //     console.log("handleAddproduct:>>>>>>", product);
  //     console.log("handlequantity:>>>>>>", quantity);

  //      // find indeax of product from cartItems arry//
  //     const index = cartItems.findIndex((p) => p.id === product.id);
  //     console.log('handleindex', index)

  //     // check your product/item  already exist in cart or not
  //     const updatedItems = index !== -1
  //       ? cartItems.map((item) =>
  //           item.id === product.id
  //             ? { ...item, attributes: { ...item.attributes, quantity: item.attributes.quantity + quantity } }
  //             : item
  //         )
  //       : [...cartItems, { ...product, attributes: { quantity } }];

  //     setCartItems(updatedItems);
  //     console.log('handleitems', updatedItems);
  //   };

  const handleRemoveCart = (product) => {
    let items = [...cartItems];
    items = items?.filter((p) => p.id !== product?.id);
    setCartItems(items);
    RemoveToast("Remove item from cart");
  };

  const handleCartProductQuantity = (type, product) => {
    let items = [...cartItems];
    let index = items?.findIndex(
      (p) => p.id === product?.id
    ); /* add filter method make new array */
    if (type === "inc") {
      items[index].attributes.quantity += 1;
    } else if (type === "dec") {
      if (items[index].attributes.quantity === 1) return;
      items[index].attributes.quantity -= 1;
    }
    setCartItems(items);
  };

  return (
    <div>
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 1000,
          style: {
            background: "#363636",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 1000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />

      <Context.Provider
        value={{
          products,
          setProducts,
          categories,
          setCategories,
          cartItems,
          setCartItems,
          handleAddToCart,
          cartCount,
          handleRemoveCart,
          showCart,
          setShowCart,
          handleCartProductQuantity,
          cartSubTotal,
        }}
      >
        {children}
      </Context.Provider>
    </div>
  );
};

export default AppContext;
