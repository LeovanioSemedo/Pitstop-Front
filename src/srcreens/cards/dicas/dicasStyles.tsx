import {StyleSheet, Platform} from 'react-native';

export const dicasStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#022B30',
        paddingTop: Platform.OS === 'ios' ? 110 : 80,
        paddingBottom: 90,
    },

    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: Platform.OS === 'ios' ? 110 : 80,
        backgroundColor: '#022B30',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Platform.OS === 'ios' ? 40 : 20,
        borderBottomWidth: 1,
        borderBottomColor: '#0098A9',
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },

    titleContainer: {
        marginTop: 60,
        alignItems: 'center',
        paddingBottom: 10,
    },


    backButton: {
        position: 'absolute',
        top: Platform.OS === 'ios' ? 120 : 120,
        left: 20,
        padding: 10,
        backgroundColor: '#0098A9',
        borderRadius: 50,
        zIndex: 10,
        elevation: 6,
    },

    listContainer: {
        padding: 20,
        paddingTop: Platform.OS === 'ios' ? 50 : 30,
    },

    dicaCard: {
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 20,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        borderLeftWidth: 5,
        borderLeftColor: '#0098A9',
    },

    dicaHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },

    dicaTitulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#022B30',
        marginLeft: 10,
        flex: 1,
    },

    dicaDescricao: {
        fontSize: 14,
        color: '#666',
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
        borderRadius: 10,
    }
})