import { createContext, useState } from "react";

 export const Context = createContext();

const AppContext = ({children})=> {
  const [categories, setCategories] = useState();
  const [products, setProducts] = useState();
 /*here we create which or those state we passed in child component globally */
  return(

      <Context.Provider value={{
        categories,
        setCategories,
        products,
        setProducts,
      }}>
        {children}
    </Context.Provider>
      );
};

export default AppContext;