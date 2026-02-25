import  {Text, View, Button, StatusBar, TouchableOpacity}  from "react-native";
import { manutencao } from "./manutencaoStyles";
import { Ionicons } from '@expo/vector-icons';




export function Manutencao ({ voltar }: any) {


    return (
        <View style={manutencao.container} >
         <StatusBar barStyle="light-content" backgroundColor="#022B30" translucent={false} />

        <TouchableOpacity style={manutencao.backButton} onPress={voltar}>
              <Ionicons name="arrow-back" size={30} color="#fff"/>
        </TouchableOpacity>
            <Text style={manutencao.Text}>Tela de Manutencao</Text>
            <Button title="Voltar" onPress={voltar} />

        </View>
    )
}
