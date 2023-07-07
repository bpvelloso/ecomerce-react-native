import api from "./api";

export async function salvarProduto(produto) {
    try{
        const resultado = await api.post('produtos',produto)
        return resultado.data
    }catch(err){
        console.log(err);
        return {}
    }
}

export async function obterProdutos() {
    try{
        const resultado = await api.get('produtos')
        return resultado.data
    }catch(err){
        console.log(err);
        return []
    }
}