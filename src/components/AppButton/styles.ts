import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  button: {
    backgroundColor: '#3ad1ff',
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

  pressed: {
    opacity: 0.75, // Dims button slightly when touched
  }
  
});

export default styles;