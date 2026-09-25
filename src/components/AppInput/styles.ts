import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  containerInputText: {
    backgroundColor: '#f8f6f6',
    borderRadius: 25,
    paddingHorizontal: 18,
    marginVertical: 12,
    marginHorizontal: 8,
  },

  inputText: {
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    backgroundColor: 'transparent',
    paddingVertical: 12,
    marginVertical: 12,
    fontSize: 16,
    color: '#333333',
  },

  inputTextFocused: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  containerInputTextSmall: {
    backgroundColor: '#f8f6f6',
    borderRadius: 20,
    paddingHorizontal: 12,
  },

  inputTextSmall: {
    borderBottomColor: '#E0E0E0',
    backgroundColor: 'transparent',
    paddingVertical: 8,
    marginVertical: 8,
    fontSize: 16,
    color: '#333333',
  },

  containerInputPicker: {
    backgroundColor: '#f8f6f6',
    borderRadius: 20,
    paddingHorizontal: 8,
  },

  inputPicker: {
    borderBottomColor: '#E0E0E0',
    backgroundColor: 'transparent',
    fontSize: 16
  },

});

export default styles;