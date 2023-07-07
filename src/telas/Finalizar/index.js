import { Text, View, FlatList, StatusBar, TouchableOpacity } from 'react-native';
import { Produto } from '../../componentes/Produto';
import { estilos } from './estilos';
import { Feather } from 'react-native-vector-icons'
import MaterialCommunityIcons from 'react-native-vector-icons/Feather';
import { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import { TemaContext } from '../../contexts/TemaContext';
import { AutenticacaoContext } from '../../contexts/AutenticacaoContext';
import { ProdutosContext } from '../../contexts/ProdutosContext';


export default function Finalizar({navigation}) {
  
  const {temaEscolhido}=useContext(TemaContext)
  const {usuario}=useContext(AutenticacaoContext)
  const {quantidade, carrinho, ultimosVistos, viuProduto}=useContext(ProdutosContext)
  
  const estilo = estilos(temaEscolhido)
  
  function total() {
    let valor=0;
    carrinho.forEach(p => {
      valor+=p.preco  
    });
    return valor
  }

  return (
    <View style={estilo.container}>
      <StatusBar />
      <View style={estilo.dadosPedido}>
        <View style={estilo.cardEntrega}>
          <Text style={estilo.tituloEntrega} >Informações de Entrega</Text>
          <Text style={estilo.dadosUsuario} >Nome: {usuario.nome}</Text>
          <Text style={estilo.dadosUsuario} >Endereço: {usuario.endereco}</Text>
          <Text style={estilo.dadosUsuario} >E-mail: {usuario.email}</Text>
          <Text style={estilo.dadosUsuario} >Telefone: {usuario.telefone}</Text>
        </View>
        <Text style={estilo.dadosUsuario} >Quantidade: {quantidade}</Text>
        <Text style={estilo.dadosUsuario} >Preço Total: {total()}</Text>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Principal')} 
            style={estilo.botao} >
            <Text style={estilo.botaoTexto}>Finalizar</Text>
      </TouchableOpacity>

    </View>
  );
}

