import { useState } from 'react';
import { TextInput, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from "./styles";

interface AppInputProp {
    message?: string;
};

interface PickerOption {
  label: string;
  value: string;
}

interface AppInputPickerProp {
    message?: string;
    options: PickerOption[];
    selectedValue?: string;
    onValueChange?: (itemValue: string) => void;
};



export const AppInput = ({message}: AppInputProp) => {

const [isFocused, setIsFocused] = useState(false);

    return (
        <View style={styles.containerInputText}>
            <TextInput
                style={[
                    styles.inputText,
                    isFocused && styles.inputTextFocused
                ]}
                placeholder={message}
                placeholderTextColor="#888888"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            >   
            </TextInput>
        </View>
    );
};

export const AppInputSmall = ({message}: AppInputProp) => {

    return (
        <View style={styles.containerInputTextSmall}>
            <TextInput
                style={styles.inputTextSmall}
                placeholder={message}
                placeholderTextColor="#888888"
            >   
            </TextInput>
        </View>
    );
};

export const AppInputPicker = ({ message, options, selectedValue, onValueChange }: AppInputPickerProp) => {
    
  return (
    <View style={styles.containerInputPicker}>
      <Picker
        selectedValue={selectedValue}
        onValueChange={onValueChange}
        style={styles.inputPicker}
      >
        {message && <Picker.Item label={message} value="" enabled={false} />}

        {options.map((item) => (
          <Picker.Item 
            key={item.value} 
            label={item.label} 
            value={item.value} 
          />
        ))}
      </Picker>
    </View>
  );
};