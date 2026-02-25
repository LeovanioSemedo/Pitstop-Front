
import { View, Text, TouchableOpacity, StatusBar, ScrollView } from "react-native";
import React, { useState } from "react"; 
import { mainPageStyles } from "./mainPageStyles";
import { Diag } from "../cards/Diag/diag";
import { Alertas } from "../cards/alertasEerros/alertasEerros";
import { Manutencao } from "../cards/manutencao/manutencao";
import { Dicas } from "../cards/dicas/dicas";


export function MainPage({ navigation }: any) {

        const [showDiag, setShowDiag] = useState(false);
        const [showAlert, setShowAlert] = useState(false);
        const [showManutencao, setShowManutencao] = useState(false);
        const [showDicas, setShowDicas] = useState(false);

        const Diagnostico = () => {
            setShowDiag(true);
        };

        if (showDiag) {
            return <Diag voltar={() => setShowDiag(false)} />;
        };

        const alerta = () => {
            setShowAlert(true);
        };

        if (showAlert) {
            return <Alertas voltar={() => setShowAlert(false)} />;
        };

        const manutencao = () => {
            setShowManutencao(true);
        };

        if (showManutencao) {
            return <Manutencao voltar={() => setShowManutencao(false)} />;
        };

        const dicas = () => {
            setShowDicas(true);
        };

        if (showDicas) {
            return <Dicas voltar={() => setShowDicas(false)} />;
        };
        

    return (
        <View style={mainPageStyles.container}>
             <StatusBar barStyle="light-content" backgroundColor="#022B30" translucent={false} />

            <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent: 'center', alignItems: 'center'}}>

            <View style={mainPageStyles.mainContent}>
             <View style={mainPageStyles.Cards}>
                
                <View style={mainPageStyles.Card}>
                    <TouchableOpacity style={mainPageStyles.btnCard} onPress={Diagnostico}>
                    <Text style={mainPageStyles.btnCardText}>Diagnóstico</Text>
                    </TouchableOpacity>

                    </View>
            
                <View style={mainPageStyles.Card}>
                    <TouchableOpacity style={mainPageStyles.btnCard} onPress={alerta}>
                    <Text style={mainPageStyles.btnCardText}>Alertas/Erros</Text>
                    </TouchableOpacity>
                    </View>
                <View style={mainPageStyles.Card}>
                    <TouchableOpacity style={mainPageStyles.btnCard} onPress={manutencao}>
                    <Text style={mainPageStyles.btnCardText}>Manutenção</Text>
                    </TouchableOpacity>
                    </View>
                <View style={mainPageStyles.Card}>
                    <TouchableOpacity style={mainPageStyles.btnCard} onPress={dicas}>
                    <Text style={mainPageStyles.btnCardText}>Dicas</Text>
                    </TouchableOpacity>
                    </View>
               

            </View>

            </View>

            </ScrollView>
        </View>
    );
}