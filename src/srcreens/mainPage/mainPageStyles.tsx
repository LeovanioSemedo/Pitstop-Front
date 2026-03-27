import {ImageBackground, StyleSheet} from 'react-native';


export const mainPageStyles = StyleSheet.create({
    
    container: {
        flex: 1,   
        // backgroundColor: '#022B30',   
        marginBottom:60,  
    },

    mainText: {
        fontSize: 24,
        fontWeight: 'bold',
    },

    btnText:{
        fontSize: 18, 
        color: '#007BFF',
    },

    mainContent: {
       justifyContent: 'center',
       alignItems: 'center',
       alignSelf: 'center',
       width: '100%',
    },

    header: {
        marginTop: 110,
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },

    headerText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },

    subHeaderText: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
        marginTop: 5,
        marginBottom: -15,
    },


    Cards: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '100%',
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 15,
    },

    Card: {
        width: '75%',
        minWidth: 160,
        height: 170,
        backgroundColor: 'rgba(2,43,48,0.85)',
        borderRadius: 16,
        borderWidth: 1.5,
        borderColor: '#0098A9',
        shadowColor: '#000',
        margin: 8,
        justifyContent: 'flex-start',
        alignItems: 'center',
        elevation: 6,
        overflow: 'hidden',
        padding: 12,
    },

    cardImage: {
        opacity: 0.25,
        alignSelf: 'center',
        resizeMode: 'cover',
        alignItems: 'center',
        width: '110%',
        justifyContent: 'center',
    },


    cardTitle: {
        color: '#fff',
        fontSize: 13,
        textAlign: 'center',
        marginBottom: 10,
        fontWeight: '600',
        marginTop: 6,
    },

    btnCardText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },

    btnCard: {
        backgroundColor: '#0098A9',
        width: '80%',
        paddingVertical: 7,
        paddingHorizontal: 0,
        textAlign: 'center',
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 12,
        marginBottom: 0,
        elevation: 2,
    },







});
