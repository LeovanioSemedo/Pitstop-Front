import  {Text, View, Button, StatusBar, ScrollView, TouchableOpacity}  from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { dicasStyles } from "./dicasStyles";


export function Dicas ({ voltar }: any) {


    return (
        <View style={dicasStyles.container} >
         <StatusBar barStyle="light-content" backgroundColor="#022B30" translucent={false} />


            <TouchableOpacity style={dicasStyles.backButton} onPress={voltar}>
              <Ionicons name="arrow-back" size={30} color="#fff"/>
        </TouchableOpacity>
            <Text style={dicasStyles.Text}>Tela de Dicas</Text>
            <Button title="Voltar" onPress={voltar} />


        </View>
    )
}
