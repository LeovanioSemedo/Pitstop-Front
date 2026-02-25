import {ImageBackground, StyleSheet} from 'react-native';


export const mainPageStyles = StyleSheet.create({

    header: {
        width: '100%',
        height: 60,
        backgroundColor: '#022B30',
        justifyContent: 'center',
        alignItems: 'center',
    },  
    
    container: {
        flex: 1,   
        backgroundColor: '#BFBFBF',     
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
    },

    Cards: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '80%',
    alignSelf: 'center',
    },

    Card : {
    width: '48%',    
    height: 150,
    backgroundColor: '#022B30',
    borderRadius: 12,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,  
    
    overflow: 'hidden', // Garante que a imagem respeite o borderRadius no Android

    },

/*
    diagCard: {
        backgroundColor: '#000'
    },*/

    btnCard: {
        backgroundColor: '#0098A9',
        width: '80%',
        height: 'auto',
        padding: 3,
        textAlign: 'center',
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
    },

    btnCardText: {
        color: '#fff',
        fontWeight: 'bold'
    },







});
