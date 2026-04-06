import {StyleSheet, Platform} from 'react-native';

export const alertasEerros = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#022B30',
        paddingTop: Platform.OS === 'ios' ? 110 : 80, // space for absolute header
        paddingBottom: 90, // space for absolute footer
        paddingHorizontal: 20,
    },

    backButton: {
        position: 'absolute',
        top: Platform.OS === 'ios' ? 150 : 90, // below the absolute header
        left: 25,
        padding: 10,
        backgroundColor: '#0098A9',
        borderRadius: 50,
        zIndex: 10,
        elevation: 6,
    },

    title: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 20,
    },

    list: {
        flex: 1,
    },

    alertaCard: {
        flexDirection: 'row',
        backgroundColor: '#01343A',
        borderRadius: 15,
        padding: 15,
        marginBottom: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },

    alertaIconContainer: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0098A9',
        borderRadius: 30,
        marginRight: 15,
    },

    alertaImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },

    placeholder: {
        width: 50,
        height: 50,
        backgroundColor: '#555',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },

    placeholderText: {
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold',
    },

    alertaTextContainer: {
        flex: 1,
    },

    alertaTitulo: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 5,
    },

    alertaDescricao: {
        fontSize: 14,
        color: '#B0B0B0',
        lineHeight: 20,
    },

    Text: {
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