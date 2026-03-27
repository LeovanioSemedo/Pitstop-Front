import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'flex-start',
    paddingTop: 60,
  },

  closeButton: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 10,
    marginTop: 10,
  },
  
  menuContainer: {
    backgroundColor: '#90E4EF',
    borderRadius: 15,
    marginHorizontal: 20,
    paddingVertical: 10,
    paddingHorizontal: 10 ,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    height: '80%',
    width: '75%',
    alignSelf: 'flex-end',
    position: 'absolute',
    top: 50,
    right: 0,
    marginRight: 1,
  },
  
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#022B30',
  },
  
  menuIcon: {
    fontSize: 24,
    marginRight: 15,
    width: 30,
    textAlign: 'center',
  },
  
  menuLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333333',
    flex: 1,
  },
});
