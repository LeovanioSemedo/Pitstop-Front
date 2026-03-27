import React from 'react';
import { View, Text, StatusBar, ScrollView } from 'react-native';
import { dashboardStyles } from './dashboardStyles';
import { Ionicons } from '@expo/vector-icons';
import { Header } from '../../utils/header/header';
import { Footer } from '../../utils/footer/footer';

interface MetricaItem {
  icon: string;
  valor: string;
  nome: string;
}

let agua_valor = 70;
let Estado_motor = 'OK';
let temperatura = 12;
let pressao = 32;
let bateria = 80;
let velocidade = 0;

export function Dashboard() {
  const metricas: MetricaItem[] = [
    { icon: 'water', valor: `${agua_valor}%`, nome: 'Combustível' },
    { icon: 'hammer', valor: `${Estado_motor}`, nome: 'Motor' },
    { icon: 'thermometer', valor: `${temperatura}°`, nome: 'Temperatura' },
    { icon: 'flask', valor: `${pressao}PSI`, nome: 'Pressão' },
    { icon: 'car', valor: `${bateria}%`, nome: 'Bateria' },
  ];

  return (
    <View style={dashboardStyles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#022B30" translucent={false} />
      
      
      <ScrollView
        contentContainerStyle={dashboardStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={dashboardStyles.title}>Dashboard</Text>
        

        <View style={dashboardStyles.velocidadeContainer}>
          <View style={dashboardStyles.velocidade}>
            <Ionicons name="speedometer" size={100} color="#0098A9" />
            <Text style={dashboardStyles.velocidadeValue}>{velocidade} km/h</Text>
          </View>
        </View>


        <View style={dashboardStyles.metricasContainer}>
          {metricas.map((metrica, index) => (
            <View key={index} style={dashboardStyles.metricaCard}>
              <Ionicons 
                name={metrica.icon as any} 
                size={32} 
                color="#0098A9" 
              />
              <Text style={dashboardStyles.metricaValor}>{metrica.valor}</Text>
              <Text style={dashboardStyles.metricaNome}>{metrica.nome}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

    </View>
  );
}
