import { StyleSheet } from "react-native";

export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c0bebeff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    alignItems: 'center',
    //marginBottom: 20,
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
  txt: {
    color: '#FFFFFF'
  },

  FistTxt: {
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 13,
  },

  BemVindoTxt: { 
    fontSize: 24,
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: '700',
    marginBottom: 8,

   },

  imageLogo: {
   width: 250,
   height: 200,
   marginBottom: 10,    
   marginTop: 20,
   resizeMode: 'contain',
  },

  linkText: {
    color: '#0098A9',
    textDecorationLine: 'underline',
    margin: 15,
  },

  primaryButton: {
    backgroundColor: '#0098A9',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 12,
    width: '80%',
  },

  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#0098A9',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    width: '80%',
  },

  primaryButtonText: {
    color: '#022B30',
    fontWeight: '700',
  },

  secondaryButtonText: {
    color: '#0098A9',
    fontWeight: '700',
  },

  formContainer: {
    width: '80%',
    alignItems: 'center',
    marginTop: -115,
    backgroundColor: '#F3F3F3',
    padding: 16,
    borderRadius: 12,
    height: 350,  
    boxShadow: '2px 4px 4px #00000015',

  },

  inputLabel: {
    alignSelf: 'flex-start',
    color: '#0098A9',
    marginTop: 12,
    marginBottom: 4,
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
  },

  buttonDisabled: {
    opacity: 0.7,
  },

});