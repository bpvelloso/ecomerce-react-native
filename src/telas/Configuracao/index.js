import { Text, View, Switch } from 'react-native';
import { estilos } from './estilos';
import { useContext, useState } from 'react';
import { TemaContext } from '../../contexts/TemaContext';

export default function Configuracao({ navigation }) {
  const [estado, setEstado] = useState(true);

  const {temaAtual, salvarTemaDispositivo, temaEscolhido} = useContext(TemaContext)
  const estilo = estilos(temaEscolhido)
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Configuração</Text>

      <View style={estilo.inputArea}>
      <Text style={estilo.subtitulo}>Tema Atual: {temaAtual.charAt(0).toUpperCase() + temaAtual.slice(1)}</Text>
      <Switch
        onValueChange={() => temaAtual === 'escuro' ? salvarTemaDispositivo('claro') : salvarTemaDispositivo('escuro')}
        value={temaAtual === 'escuro' ? true : false}
      />
      </View>
    </View>
  );
}

