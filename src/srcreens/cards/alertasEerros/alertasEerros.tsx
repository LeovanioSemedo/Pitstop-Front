import  {Text, View, Button, StatusBar, TouchableOpacity}  from "react-native";
import { alertasEerros } from "./alertasEerrosStyles";
import { Ionicons } from '@expo/vector-icons';


export function Alertas ({ voltar }: any) {


    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#022B30'}} >
         <StatusBar barStyle="light-content" backgroundColor="#022B30" translucent={false} />

             <TouchableOpacity style={alertasEerros.backButton} onPress={voltar}>
              <Ionicons name="arrow-back" size={30} color="#fff"/>
        </TouchableOpacity>
            <Text style={alertasEerros.Text}>Tela de Alertas</Text>
            <Button title="Voltar" onPress={voltar} />
            

        </View>
    )
}
