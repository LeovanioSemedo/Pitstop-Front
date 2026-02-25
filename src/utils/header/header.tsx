import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { headerStyles } from './headerStyles';

export function Header() {
    return (
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

            <TouchableOpacity style={headerStyles.rightContainer}>
                <Ionicons name="menu" size={32} color="white" />
            </TouchableOpacity>
        </View>
    );
}
