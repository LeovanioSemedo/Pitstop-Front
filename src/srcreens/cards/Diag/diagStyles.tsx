import {StyleSheet, Platform} from 'react-native';

export const diagStyles = StyleSheet.create({
    container: {
            flex: 1, 
            justifyContent: 'center', 
            alignItems: 'center', 
            backgroundColor: '#022B30',
            paddingTop: Platform.OS === 'ios' ? 110 : 80, // space for absolute header
            paddingBottom: 90, // space for absolute footer

    },

    backButton: {
        position: 'absolute',
        top: Platform.OS === 'ios' ? 150 : 90, // below the absolute header
        left: 25,
        padding: 10,
        backgroundColor: '#0098A9',
        borderRadius: 50,
        zIndex: 0,
        elevation: 6,
    },

    diagText: {
        fontSize: 20, 
        color: 'white'
    },

    diagButton: {
        marginTop: 20,
        padding: 15,
        backgroundColor: '#0098A9', 
        borderRadius: 20,
    }

})