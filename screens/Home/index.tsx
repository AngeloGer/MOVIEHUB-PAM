import { Text, View, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppButtonSquare, MovieCard, SearchBar } from "../../src/components";
import iconMovie from "../../assets/icons/iconMovie.png"
import styles from "./styles";

export default function Home() {

    return (

        <SafeAreaView style={styles.containerPai}>
            <ScrollView>
            <View style={styles.containerIntro}>
                <Text style={styles.introText}>Olá, User ✋</Text>
                <Text style={styles.introSubText}>Desfrute de seus filmes</Text>
            </View>
            <View style={styles.containerSearch}>
              <SearchBar/>
            </View>
            <View style={styles.containerList}>
                <Text style={styles.textList}>Filmes Recentes</Text>
                <ScrollView horizontal>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                </ScrollView>
            </View>
            <View style={styles.containerList}>
                <Text style={styles.textList}>Favoritos</Text>
                <ScrollView horizontal>                        
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                </ScrollView>
            </View>
            <View style={styles.containerList}>
                <Text style={styles.textList}>Sem reviews</Text>
                <ScrollView horizontal>                        
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                </ScrollView>
            </View>
            <View style={styles.containerList}>
                <Text style={styles.textList}>Favoritos</Text>
                <ScrollView horizontal>                        
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                </ScrollView>
            </View>
            </ScrollView>
        </SafeAreaView>
    );
};