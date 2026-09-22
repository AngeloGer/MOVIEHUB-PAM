import { useState } from "react";
import { Text, View, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppButton, AppInput, AppInputSmall, AppInputPicker } from "../../src/components";
import iconMovie from "../../assets/icons/iconMovie.png"
import styles from "./styles";

export default function MovieCreate() {

const [selectedGenre, setSelectedGenre] = useState("");

const genreOptions = [
  { label: 'Ação', value: 'acao' },
  { label: 'Comédia', value: 'comedia' },
  { label: 'Drama', value: 'drama' },
  { label: 'Ficção Científica', value: 'ficcao' },
  { label: 'Romance', value: 'romance' },
  { label: 'Terror', value: 'terror' },
  { label: 'Aventura', value: 'aventura' },
];

  return (
    <SafeAreaView style={styles.containerPai}>
        <View style={styles.containerInfo}>
          <Text>Título</Text>
          <AppInputSmall
            message="Digite o título do filme"
          />
        </View>
        <View style={styles.containerInfo}>
          <Text>Gênero</Text>
          <AppInputPicker
            message="Selecione o gênero do filme"
            options={genreOptions}
            selectedValue={selectedGenre}
            onValueChange={(itemValue) => setSelectedGenre(itemValue)}
          />
        </View>
        <View style={styles.containerInfo}>
          <Text>Data de Lançamento</Text>
          <AppInputSmall
            message="Ex: 2022"
          />     
        </View>
        <View style={styles.containerInfo}>
          <Text>Duração (min)</Text>
          <AppInputSmall
            message="Ex: 180"
          />
        </View>
        <View style={styles.containerInfo}>
          <Text>Diretor</Text>
          <AppInputSmall
            message="Digite o nome do diretor"
          />
        </View>
        <View style={styles.containerInfo}>
          <Text>Descrição</Text>
          <AppInputSmall
            message="Escreva uma descrição para o filme"
          />
        </View>
        <Text>Nota (0 a 5)</Text>
        <Text>Status</Text>
        <View style={styles.containerInfo}>
          <Text>Trailer (URL YouTube)</Text>
          <AppInputSmall
              message="Coloque o link do trailer do filme"
          />
        </View>
    </SafeAreaView>
 );
};