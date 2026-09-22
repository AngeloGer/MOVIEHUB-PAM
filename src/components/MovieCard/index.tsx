import { Text, View, Image } from "react-native";
import posterMovie from "../../../assets/images/movieimgs/darkknightmovie.png";
import styles from "./styles";

interface MovieCardProp {
    text?: string;
};

export const MovieCard = ({text}: MovieCardProp) => {

    return(
        <View style={styles.containerMovie}>
            <Image
                source={posterMovie}
                style={styles.imageMovie}
            />
            <Text>{text}</Text>
        </View>
    );
};