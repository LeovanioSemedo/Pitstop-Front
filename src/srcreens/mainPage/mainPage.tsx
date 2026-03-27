
import { View, Text, TouchableOpacity, StatusBar, ScrollView, Image, ImageBackground } from "react-native";
import React, { useState } from "react"; 
import { mainPageStyles } from "./mainPageStyles";
import { Diag } from "../cards/Diag/diag";
import { Alertas } from "../cards/alertasEerros/alertasEerros";
import { Dicas } from "../cards/dicas/dicas";
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';



export function MainPage( navigation: any) {

        const [showDiag, setShowDiag] = useState(false);
        const [showAlert, setShowAlert] = useState(false);
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


        const dicas = () => {
            setShowDicas(true);
        };

        if (showDicas) {
            return <Dicas voltar={() => setShowDicas(false)} />;
        };
        

    return (
        <LinearGradient colors={['#022B30', '#0098A9']} style={mainPageStyles.container}>
             <StatusBar barStyle="light-content" backgroundColor="#022B30" translucent={false} />

            <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent: 'center', alignItems: 'center'}}>

            <View style={mainPageStyles.mainContent}>
                <View style={mainPageStyles.header}>
                    <Text style={mainPageStyles.headerText}>Bem-vindo à Pitstop!</Text>
                    <Text style={mainPageStyles.subHeaderText}>Principais serviços</Text>
                </View>
             <View style={mainPageStyles.Cards}>
                
                <ImageBackground source={require('../../../assets/Diagnostico.png')} style={mainPageStyles.Card} imageStyle={mainPageStyles.cardImage}>
                    <Ionicons name='car-sport' size={50} color='#fff' />
                    <Text style={mainPageStyles.cardTitle}>Relatório da saúde do seu veículo</Text>
                    <TouchableOpacity style={mainPageStyles.btnCard} onPress={Diagnostico}>
                        <Text style={mainPageStyles.btnCardText}>Diagnóstico</Text>
                    </TouchableOpacity>
                </ImageBackground>

                <ImageBackground source={require('../../../assets/ALerts.png')} style={mainPageStyles.Card} imageStyle={mainPageStyles.cardImage}>
                    <Ionicons name='warning' size={50} color='#fff' /> 
                    <Text style={mainPageStyles.cardTitle}>Notificações de problemas no seu veículo</Text>
                    <TouchableOpacity style={mainPageStyles.btnCard} onPress={alerta}>
                        <Text style={mainPageStyles.btnCardText}>Alertas/Erros</Text>
                    </TouchableOpacity>
                </ImageBackground>

                <ImageBackground source={require('../../../assets/Tips.png')} style={mainPageStyles.Card} imageStyle={mainPageStyles.cardImage}>
                    <Ionicons name='information-circle' size={50} color='#fff' /> 
                    <Text style={mainPageStyles.cardTitle}>Recomendações para melhorar a performance do seu veículo</Text>
                    <TouchableOpacity style={mainPageStyles.btnCard} onPress={dicas}>
                        <Text style={mainPageStyles.btnCardText}>Dicas</Text>
                    </TouchableOpacity>
                </ImageBackground>
                    </View>
               

            </View>

            </ScrollView>
        </LinearGradient>
    );
}