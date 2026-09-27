import { StyleSheet } from 'react-native';

//Cor padrão para os botões: 
// #3ad1ff
// #6b6a6a
// #3ad1ff
// #3ad1ff
// #3ad1ff
// #3ad1ff

const styles = StyleSheet.create({

  button: {
    borderRadius: 25,
    paddingVertical: 14,
    paddingHorizontal: 32,
    marginHorizontal: 8,
    marginVertical: 16,
    elevation: 5,
    shadowColor: '#3a3dff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },

  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  buttonSquare: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 55,
    height: 55,
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 15,
  },

  pressed: {
    opacity: 0.75, // Dims button slightly when touched
  },

  icon: {
    marginRight: 8,
  },
  
});

export default styles;