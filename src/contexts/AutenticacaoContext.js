import { createContext, useState } from "react";

export const AutenticacaoContext = createContext({})

export function AutenticacaoProvider({children}) {
   
    const [usuario, setUsuario] = useState({})

    function login(email, senha) {
        if(email == 'a@a.com' && senha == '123'){
            setUsuario({
                nome: 'Bruno',
                email: email,
                endereco: 'Rua José Durieux, 107',
                telefone: '+55 (48) 99603-9605'
            })
            return 'ok'
        }else{
            return 'Usuário ou senha incorretos'
        }
    }

    return(
        <AutenticacaoContext.Provider value={{usuario, login}}>
            {children}
        </AutenticacaoContext.Provider>
    )
}