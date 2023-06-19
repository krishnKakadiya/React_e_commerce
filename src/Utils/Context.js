import React,{ createContext, useState } from "react";


export const Context = createContext();

const AppContext = ({Children}) => {
    const [categories, setCategories] = useState();
    const [products, setProducts] = useState();

    return<Context.Provider value={{
        categories,
        setCategories,
        products,
        setProducts,
    }} >
            {Children}
        </Context.Provider>
    
}

export default AppContext;