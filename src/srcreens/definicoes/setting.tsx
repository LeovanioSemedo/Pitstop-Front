import React from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { settingsStyles } from './settingsStyles';
import { Ionicons } from '@expo/vector-icons';


export function Settings() {
    return (
        <View style={settingsStyles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#022B30" translucent={false} />

            <View style={settingsStyles.header}>
                <Text style={settingsStyles.Maintext}>Definições</Text>
            </View>

            <LinearGradient
                colors={['#0098A9', '#037380']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={settingsStyles.UserInfoContainer}
            >
                <Ionicons name="person" size={30} color="#022B30" />
                <View style={settingsStyles.UserInfo}>
                <Text style={settingsStyles.userText}>Nome do Usuario</Text>
                <Text style={settingsStyles.emailText}>Usuario@gmail.com</Text>
                </View>
                <Ionicons name='arrow-forward' size={30} color='#022B30' /> 
            </LinearGradient>

            <View style={settingsStyles.optionsContainer}>
            <TouchableOpacity onPress={() => console.log('Item 1')}>
                <View style={settingsStyles.Options}>
                    <Text style={settingsStyles.text}>Alterar código</Text>
                    <Ionicons name='arrow-forward' size={25} color='#022B30' />
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => console.log('Item 2')}>
                <View style={settingsStyles.Options}>
                    <Text style={settingsStyles.text}>Permições</Text>
                    <Ionicons name='shield-checkmark-outline' size={25} color='#022B30' />
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => console.log('Item 3')}>
                <View style={settingsStyles.Options}>
                    <Text style={settingsStyles.text}>Notificações</Text>
                    <Ionicons name="notifications" size={24} color="#022B30" />
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => console.log('Item 4')}>
                <View style={settingsStyles.Options}>
                    <Text style={settingsStyles.text}>Meus carros</Text>
                    <Ionicons name='car' size={25} color='#022B30' />
                </View>
            </TouchableOpacity>

             <TouchableOpacity onPress={() => console.log('Item 5')}>
                <View style={settingsStyles.LastOptions}>
                    <Text style={settingsStyles.text}>Logout</Text>
                    <Ionicons name='log-out' size={25} color='#022B30' />
                </View>
            </TouchableOpacity>
            </View>
        </View>
    );
}
