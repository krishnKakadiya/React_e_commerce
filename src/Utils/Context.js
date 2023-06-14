import { createContext } from "react";


export const Context = createContext();

const AppContext = ({Children}) => {
    return(

        <Context.Provider>
            {Children}
        </Context.Provider>
    )
}

export default AppContext;