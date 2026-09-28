import { Text, View, Image, ScrollView, Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../navigation/MovieStack';
import { SafeAreaView } from "react-native-safe-area-context";
import { AppButtonSquare, SearchBar } from "../../components";
import styles from "./styles";

export default function Movies() {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (

    <SafeAreaView style={styles.containerPai}>
      <Text style={styles.title}>Filmes</Text>
      <View style={styles.containerDouble}>
        <View style={styles.containerSearch}>
          <SearchBar/>
        </View>
        <View style={styles.containerButton}>
          <AppButtonSquare icon="sliders" color="#b4bec0"/>
        </View>
        <AppButtonSquare icon="plus" color="#3ad1ff"
          onPress={
            () => navigation.navigate('MovieCreate')
          }
        />
      </View>
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