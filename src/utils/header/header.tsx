import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { useState, useContext } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { headerStyles } from './headerStyles';
import { Menu } from '../Menu/menu';
import { LogOut, Sair } from '../../../App';

export function Header() {
    const [menuVisible, setMenuVisible] = useState(false);
    const { logout } = useContext<Sair>(LogOut);

    const menuItems = [
        {
            id: '1',
            nome: 'Meu Perfil',
            onPress: () => Alert.alert('Perfil', 'Ir para perfil do utilizador'),
        },
        {
            id: '2',
            nome: 'Configurações',
            onPress: () => Alert.alert('Configurações', 'Abrir configurações'),
        },
        {
            id: '3',
            nome: 'Suporte',
            onPress: () => Alert.alert('Suporte', 'Contactar suporte técnico'),
        },
        {
            id: '4',
            nome: 'Comunidade',
            onPress: () => Alert.alert('Comunidade', 'Ir para a comunidade de automotores'),
        },
        {
            id: '5',
            nome: 'Sair',
            onPress: () => {
              logout();
              setMenuVisible(false);
            },
        },

        
    ];

    return (
        <>
            <View style={headerStyles.container}>
                <View style={headerStyles.leftContainer}>
                    <Image 
                        source={require('../../../assets/PITSTOP-Car-whit.png')} 
                        style={headerStyles.logo} 
                    />
                </View>
                
                <View style={headerStyles.centerContainer}>
                    <Image source={require('../../../assets/PitStop Text-White.png')} style={headerStyles.Centerlogo} />
                </View>

                <TouchableOpacity 
                    style={headerStyles.rightContainer}
                    onPress={() => setMenuVisible(true)}
                >
                    <Ionicons name="menu" size={32} color="white" />
                </TouchableOpacity>
            </View>

            <Menu 
                visible={menuVisible}
                onClose={() => setMenuVisible(false)}
                menuItems={menuItems}
            />
        </>
    );
}
