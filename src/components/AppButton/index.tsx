import { Pressable, Text } from 'react-native';
import styles from "./styles";

interface AppButtonProp {
    text?: string;
};


export const AppButton = ({text}:AppButtonProp ) => {
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

export const AppButtonSquare = ({text}:AppButtonProp ) => {
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