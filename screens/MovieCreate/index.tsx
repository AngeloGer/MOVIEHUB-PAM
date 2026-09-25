import { useState } from "react";
import { Text, View, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppButton, AppInputSmall, AppInputPicker, RatingStars } from "../../src/components";
import iconMovie from "../../assets/icons/iconMovie.png"
import styles from "./styles";

export default function MovieCreate() {

const [selectedGenre, setSelectedGenre] = useState("");
const [selectedStatus, setSelectedStatus] = useState("");

const genreOptions = [
  { label: 'Ação', value: 'acao' },
  { label: 'Comédia', value: 'comedia' },
  { label: 'Drama', value: 'drama' },
  { label: 'Ficção Científica', value: 'ficcao' },
  { label: 'Romance', value: 'romance' },
  { label: 'Terror', value: 'terror' },
  { label: 'Aventura', value: 'aventura' },
];

const statusOptions = [
  { label: 'Assistido', value: 'asst' },
  { label: 'Não assistido', value: 'nasst' },
];

  return (
    <SafeAreaView style={styles.containerPai}>
      <Text style={styles.title}>Novo Filme</Text>
      <View style={styles.containerInfo}>
        <Text>Adicionar Capa do Filme</Text>
      </View>
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
      <View style={styles.containerInfoDouble}>
        <View style={[styles.flex, styles.marginRight]}>
          <Text>Data de Lançamento</Text>
          <AppInputSmall
            message="Ex: 2022"
          /> 
        </View>
        <View style={styles.flex}>
          <Text>Duração (min)</Text>
          <AppInputSmall
            message="Ex: 180"
          />
        </View>
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
      <View style={styles.containerInfoDouble}>
        <View>
          <Text>Nota (0 a 5)</Text>
          <View style={styles.containerStars}>
            <RatingStars
              starSize={30}
            />
          </View>
        </View>
        <View style={styles.flex}>
          <Text>Status</Text>
            <AppInputPicker
              message="Defina um status"
              options={statusOptions}
              selectedValue={selectedStatus}
              onValueChange={(itemValue) => setSelectedStatus(itemValue)}
            />
        </View>
      </View>
      <View style={styles.containerInfo}>
        <Text>Trailer (URL YouTube)</Text>
        <AppInputSmall
            message="Coloque o link do trailer do filme"
        />
      </View>
      <AppButton
        text="Adicionar filme"
      />
    </SafeAreaView>
 );
};