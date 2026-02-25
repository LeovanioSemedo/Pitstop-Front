import { StyleSheet } from "react-native";

export const SignUpStyle = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#c0bebeff',
    alignItems: 'center',
    justifyContent: 'center',
    },

    mainTxt: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },

    header: {
    alignItems: 'center',
    backgroundColor: '#0098A9',
   marginTop: -180,
    width: '100%',
    paddingBottom: 80,
    borderRadius: 20,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    height: 500,
    paddingTop: 80,
    },

    imageLogo: {
   width: 250,
   height: 200,
   marginBottom: 0,    
   marginTop: 20,
   resizeMode: 'contain',
  },

  txt: {
    color: '#FFFFFF'
  
},

BemVindoTxt: { 
    fontSize: 24,
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: '700',
    marginBottom: 8,
   },

   FistTxt: {
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 13,
   },

   formContainer: {
     width: '80%',
    alignItems: 'center',
    marginTop: -115,
    backgroundColor: '#F3F3F3',
    padding: 24,
    borderRadius: 12,
    height: 'auto',  
    boxShadow: '2px 4px 4px #00000015',
   },

    input: {
    width: '100%',
    backgroundColor: 'none',
    color: '#022B30',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#0098A9',
    marginBottom: 15,
    },

    criarContaBtn: {
    backgroundColor: '#0098A9',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 12,
    width: '100%',
    },

    jaTenhoContaBtn: {
    color: '#0098A9',
    textDecorationLine: 'underline',
    margin: 15,
    textAlign: 'center',
    width: '100%',
    },


});