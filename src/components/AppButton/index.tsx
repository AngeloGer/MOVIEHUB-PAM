import type { ComponentProps } from 'react';
import { Pressable, Text } from 'react-native';
import { Feather } from '@react-native-vector-icons/feather';
import styles from "./styles";

interface AppButtonProps {
    text?: string;
    color?: string;
    icon?: ComponentProps<typeof Feather>['name'];
    onPress?: () => void;
};


export const AppButton = ({color, text, onPress}:AppButtonProps ) => {
    return (
        <Pressable 
            onPress={onPress}
            style={({ pressed }) => [
                styles.button,
                color ? { backgroundColor: color } : undefined,
                pressed && styles.pressed
            ]}
        >
            <Text style={styles.buttonText}>{text}</Text>
        </Pressable>
    );
};

export const AppButtonSquare = ({color, icon = 'plus', onPress}:AppButtonProps ) => {
    return (
        <Pressable 
            onPress={onPress}
            style={({ pressed }) => [
                styles.buttonSquare,
                color ? { backgroundColor: color } : undefined,
                pressed && styles.pressed
            ]}
        >
        <Feather name={icon} size={20}/>
        </Pressable>
    );
};