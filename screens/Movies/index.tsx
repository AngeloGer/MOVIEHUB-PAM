import { Text, View, Image, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppButton, SearchBar } from "../../src/components";
import styles from "./styles";

export default function Movies() {

  return (

    <SafeAreaView style={styles.containerPai}>
      <Text style={styles.title}>Filmes</Text>
      <SearchBar/>
      <View>
        <ScrollView horizontal style={styles.containerScrollOpt}>
          <Pressable 
            style={({ pressed }) => [
              styles.pressableScroll,
              pressed && styles.pressedScroll
          ]}>
            <Text style={styles.textScroll}>Todos</Text>
          </Pressable>
          <Pressable 
            style={({ pressed }) => [
              styles.pressableScroll,
              pressed && styles.pressedScroll
          ]}>
            <Text style={styles.textScroll}>Assistidos</Text>
          </Pressable>
          <Pressable 
            style={({ pressed }) => [
              styles.pressableScroll,
              pressed && styles.pressedScroll
          ]}>
            <Text style={styles.textScroll}>Quero assistir</Text>
          </Pressable>
          <Pressable 
            style={({ pressed }) => [
              styles.pressableScroll,
              pressed && styles.pressedScroll
          ]}>
            <Text style={styles.textScroll}>Assistindo</Text>
          </Pressable>
          <Pressable 
            style={({ pressed }) => [
              styles.pressableScroll,
              pressed && styles.pressedScroll
          ]}>
            <Text style={styles.textScroll}>Não assistidos</Text>
          </Pressable>
        </ScrollView> 
        <ScrollView style={styles.containerScrollMov}>
          <View style={styles.testMovie}/>
          <View style={styles.testMovie}/>
          <View style={styles.testMovie}/>
          <View style={styles.testMovie}/>
          
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};