import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  containerSearchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f6f6',
    borderRadius: 25,
    paddingHorizontal: 18,
  },

  input: {
    flex: 1,
    borderBottomColor: '#E0E0E0',
    backgroundColor: 'transparent',
    marginVertical: 12,
    fontSize: 16,
    color: '#333333',
  },

  icon: {
    marginRight: 8,
  },

  inputTextFocused: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 8,
    borderBottomWidth: 0,
  },

});

export default styles;