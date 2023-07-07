import { createContext, useState } from "react";

export const GlobalContext = createContext({})

export function InfoProvider({children}) {
    const valor=200
    const [nome, setNome] = useState("Bruno")
    return(
        <GlobalContext.Provider value={{nome, setNome}}>
            {children}
        </GlobalContext.Provider>
    )
}