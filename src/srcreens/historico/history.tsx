import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { historyStyles } from './historyStyles';

export function History() {
    return (
        <View style={historyStyles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#022B30" translucent={false} />

            <View style={historyStyles.contentContainer}>
                <Text style={historyStyles.text}>Aqui ficará o histórico de manutenções e diagnósticos.</Text>
            </View>
        </View>
    );
}
