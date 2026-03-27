import React from 'react';
import { View, Text, StatusBar, FlatList } from 'react-native';
import { historyStyles } from './historyStyles';

interface hist {
    id: string;
    data: string;
    descricao: string;
    codigoDeErro: string;
}


const historico: hist[] = [
    { id: '1', data: '2023-10-01', descricao: 'Diagnóstico de motor - Verificação de óleo', codigoDeErro: 'Erro - 05505' },
    { id: '2', data: '2023-10-05', descricao: 'Diagnóstico de freios - Substituição de pastilhas', codigoDeErro: 'Erro - 05506' },
    { id: '3', data: '2023-10-10', descricao: 'Diagnóstico elétrico - Bateria fraca', codigoDeErro: 'Erro - 05507' },
    { id: '4', data: '2023-10-15', descricao: 'Diagnóstico de suspensão - Amortecedores desgastados', codigoDeErro: 'Erro - 05508' },
    { id: '5', data: '2023-10-15', descricao: 'Diagnóstico de suspensão - Amortecedores desgastados', codigoDeErro: 'Erro - 05508' },
    { id: '6', data: '2023-10-15', descricao: 'Diagnóstico de suspensão - Amortecedores desgastados', codigoDeErro: 'Erro - 05508' },
    { id: '7', data: '2023-10-15', descricao: 'Diagnóstico de suspensão - Amortecedores desgastados', codigoDeErro: 'Erro - 05508' },
];

export function History() {
    return (
        <View style={historyStyles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#022B30" translucent={false} />

            <View style={historyStyles.contentContainer}>
                <Text style={historyStyles.title}>Histórico de Diagnósticos</Text>
                <FlatList
                    data={historico}
                    renderItem={({ item }) => (
                        <View style={historyStyles.item}>
                            <Text style={historyStyles.itemData}>{item.data}</Text>
                            <Text style={historyStyles.itemDescricao}>{item.descricao}</Text>
                            <Text style={historyStyles.itemErro}>{item.codigoDeErro}</Text>
                        </View>
                    )}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    );
}
