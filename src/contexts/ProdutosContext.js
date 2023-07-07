import { createContext, useEffect, useState } from "react";
import { obterProdutos, salvarProduto } from "../servicos/produtosService";

export const ProdutosContext = createContext({})

export function ProdutosProvider({children}) {
    const [quantidade, setQuantidade] = useState(0)
    const [carrinho, setCarrinho] = useState([])
    const [ultimosVistos, setUltimosVistos] = useState([])

    useEffect(() => {
        async function fetchData() {
            const resultados = await obterProdutos()    
            setCarrinho(resultados)
            setQuantidade(carrinho.length)
        }
        fetchData()
    }, [])

    async function viuProduto(produto) {
        setQuantidade(quantidade+1)

        const resultado = await salvarProduto(produto)

        let novoCarrinho = carrinho
        novoCarrinho.push(resultado)
        setCarrinho(novoCarrinho)

        let conjuntoUltimosVistos = new Set(ultimosVistos)
        conjuntoUltimosVistos.add(produto)
        setUltimosVistos([...conjuntoUltimosVistos])
    }

    return(
        <ProdutosContext.Provider value={{quantidade, carrinho, ultimosVistos, viuProduto}}>
            {children}
        </ProdutosContext.Provider>
    )
}