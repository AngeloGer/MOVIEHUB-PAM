import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  containerPai: {
    backgroundColor: '#fff',
  },

  title: {
    color: '#000000',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },

  containerIntro: {
    marginLeft: 16,
  },

  containerScrollOpt: {
    paddingVertical: 10,
  },

  containerScrollMov: {
    paddingVertical: 10,
  },

  containerDouble: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 12,
    marginVertical: 8,
  },

  pressableScroll: {
    textAlign: 'center',
    marginHorizontal: 8,
    backgroundColor: '#E0E0E0',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },

  pressedScroll: {
    opacity: 0.75, // Dims button slightly when touched
  },

  textScroll: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'normal',
  },

  testMovie: {
    height: 100,
    borderWidth: 5,
    borderColor: '#0f0f0f',
    borderRadius: 25,
    marginHorizontal: 10,
    marginVertical: 6,
  },

  containerSearch: {
    marginHorizontal: 8,
    marginVertical: 8,
  },

});

export default styles;