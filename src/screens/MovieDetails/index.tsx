import { Text, View, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppButton, AppButtonSquare, RatingStars } from "../../components";
import posterMovie from "../../../assets/images/movieimgs/poster.png";
import styles from "./styles";

const movie = {
  title: "Filme genérico",
  year: 2026,
  genre: "Ação",
  duration: "2h 05min",
  director: "Nome Diretor",
  status: "Assistido",
  rating: 4.5,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
};

export default function MovieDetails() {
  return (
    <SafeAreaView style={styles.containerPai}>
      <View style={styles.header}>
        <AppButtonSquare icon="arrow-left" />
        <Text style={styles.headerTitle}>Detalhes</Text>
        <AppButtonSquare icon="heart" color="#ff8080" />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.posterContainer}>
          <Image source={posterMovie} style={styles.poster} />
        </View>

        <View style={styles.content}>
          <Text style={styles.movieTitle}>{movie.title}</Text>
          <Text style={styles.metaText}>{movie.year} • {movie.genre} • {movie.duration}</Text>

          <View style={styles.ratingRow}>
            <RatingStars rating={movie.rating} starSize={18} color="#f5c542" />
            <Text style={styles.ratingText}>{movie.rating.toFixed(1)}/5</Text>
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.sectionTitle}>Sinopse</Text>
            <Text style={styles.description}>{movie.description}</Text>
          </View>

          <View style={styles.gridInfo}>
            <View style={styles.infoBox}>
              <Text style={styles.label}>Diretor</Text>
              <Text style={styles.value}>{movie.director}</Text>
            </View>

            <View style={styles.infoBox}>
              <Text style={styles.label}>Status</Text>
              <Text style={styles.value}>{movie.status}</Text>
            </View>
          </View>

          <View style={styles.gridInfo}>
            <View style={styles.infoBox}>
              <Text style={styles.label}>Gênero</Text>
              <Text style={styles.value}>{movie.genre}</Text>
            </View>

            <View style={styles.infoBox}>
              <Text style={styles.label}>Duração</Text>
              <Text style={styles.value}>{movie.duration}</Text>
            </View>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};