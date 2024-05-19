import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '303030',
  },
  txtGeneralDescription: {
    fontSize: 20,
    textAlign: 'center', 
    margin: 10,
  },
  input: {
    borderBottomWidth: 2,
    padding: 10,
    marginBottom: 15,
    fontSize: 20,
    width: '90%',
    marginEnd: 20, 
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#841584',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  botonGuardar: {
    backgroundColor: 'blue',
    color: 'white',
    padding: 10,
    borderRadius: 5,
  },
});

export default styles;