import  {Text, View, Button, StatusBar, ScrollView, TouchableOpacity}  from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { diagStyles } from "./diagStyles";


export function Diag ({ voltar }: any) {

    const IniciarDiag = () => {
        console.log("Iniciando diagnóstico...");
        // Aqui você pode adicionar a lógica para iniciar o diagnóstico
    }   
    return (
        <View style={diagStyles.container} >
         <StatusBar barStyle="light-content" backgroundColor="#022B30" translucent={false} />
        
        <TouchableOpacity style={diagStyles.backButton} onPress={voltar}>
              <Ionicons name="arrow-back" size={30} color="#fff"/>
        </TouchableOpacity>
      
        <TouchableOpacity onPress={() => {IniciarDiag()}} style={diagStyles.diagButton}>
            <Text style={diagStyles.diagText}>Iniciar Diagnóstico</Text>
        </TouchableOpacity>
           
          

        </View>
    )
}
