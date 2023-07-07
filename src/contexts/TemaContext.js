import { createContext, useEffect, useState } from "react";
import { claro, escuro, tema } from "../estilosGlobais";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const TemaContext = createContext({})

export function TemaProvider({children}) {
    
    const [temaAtual, setTemaAtual] = useState("escuro")

    const temas ={
        'escuro':escuro,
        'claro': claro   
    }

    useEffect(() => {
        async function fetchData(){
            const temaSalvo = await AsyncStorage.getItem('@tema')
            if(temaSalvo) {
                setTemaAtual(temaSalvo)
            }
        }
        fetchData()
    }, [])
    async function salvarTemaDispositivo(tema) {
        await AsyncStorage.setItem('@tema',tema)
        setTemaAtual(tema)
    }

    return(
        <TemaContext.Provider value={{
                    temaAtual, 
                    salvarTemaDispositivo,
                    temaEscolhido: temas[temaAtual]
                }
            }>
            {children}
        </TemaContext.Provider>
    )
}