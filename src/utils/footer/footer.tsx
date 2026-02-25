import { View, TouchableOpacity } from 'react-native';
import { footerStyles } from './footerStyles';
import { Ionicons } from '@expo/vector-icons';

export function Footer({ state, navigation }: any) {
    // O `state.index` nos diz qual aba (tela) está ativa no momento.
    const activeIndex = state.index;

    // Esta função usa o método `navigate` fornecido pelo React Navigation.
    const navigateTo = (screenName: string) => {
        navigation.navigate(screenName);
    }

    return (
       <View style={footerStyles.container}>
            {/* Usamos o activeIndex para mudar a cor do ícone ativo */}
            <TouchableOpacity style={footerStyles.iconBtn} onPress={() => navigateTo('Home')}>
                <Ionicons name="home" size={26} color={activeIndex === 0 ? '#022B30' : 'white'} />
            </TouchableOpacity>
            
            <TouchableOpacity style={footerStyles.iconBtn} onPress={() => navigateTo('History')}>
                <Ionicons name="time" size={30} color={activeIndex === 1 ? '#022B30' : 'white'} />
            </TouchableOpacity>

            <TouchableOpacity style={footerStyles.centerBtn} onPress={() => navigateTo('Dashboard')}>
                <Ionicons name="stats-chart" size={36} color={activeIndex === 2 ? '#0098A9' : 'white'} />
            </TouchableOpacity>

            <TouchableOpacity style={footerStyles.iconBtn} onPress={() => navigateTo('Chat')}>
                <Ionicons name="chatbubble-ellipses" size={30} color={activeIndex === 3 ? '#022B30' : 'white'} />
            </TouchableOpacity>

            <TouchableOpacity style={footerStyles.iconBtn} onPress={() => navigateTo('Settings')}>
                <Ionicons name="settings" size={30} color={activeIndex === 4 ? '#022B30' : 'white'} />
            </TouchableOpacity>
       </View>
    );
}
