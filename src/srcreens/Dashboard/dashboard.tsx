import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { dashboardStyles } from './dashboardStyles';

export function Dashboard() {
    return (
        <View style={dashboardStyles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#022B30" translucent={false} />

            <View style={dashboardStyles.contentContainer}>
                <Text style={dashboardStyles.text}>Aqui ficará o histórico de manutenções e diagnósticos.</Text>
            </View>
        </View>
    );
}
