import { Pressable, Text } from 'react-native';
import { Feather } from '@react-native-vector-icons/feather';
import styles from "./styles";

interface AppButtonProps {
    text?: string;
    icon?: string;
};


export const AppButton = ({text}:AppButtonProps ) => {
    return (
        <Pressable 
            style={({ pressed }) => [
                styles.button,
                pressed && styles.pressed
            ]}
        >
            <Text style={styles.buttonText}>{text}</Text>
        </Pressable>
    );
};

export const AppButtonSquare = ({icon}:AppButtonProps ) => {
    return (
        <Pressable 
            style={({ pressed }) => [
                styles.buttonSquare,
                pressed && styles.pressed
            ]}
        >
        <Feather name='plus' size={20}/>
        </Pressable>
    );
};