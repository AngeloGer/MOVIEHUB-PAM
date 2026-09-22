import React, { useState } from 'react';
import { TextInput, View, Image } from 'react-native';
import { Feather } from '@react-native-vector-icons/feather';
import styles from "./styles";

interface SearchBarProp {
    message?: string;
};


export const SearchBar = ({message}: SearchBarProp) => {

const [isFocused, setIsFocused] = useState(false);

    return (
        <View style={styles.containerSearchBar}>
            <Feather name='search' size={20} style={styles.icon}/>
            <TextInput
                style={[
                    styles.input,
                    isFocused && styles.inputTextFocused
                ]}
                placeholder={message}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            >   
            </TextInput>
        </View>
    );
};