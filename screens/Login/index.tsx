import React from "react";

import { Text, View, TextInput, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppButton, AppInput } from "../../src/components";
import iconMovie from "../../assets/icons/iconMovie.png"
import styles from "./styles";

export default function Login() {

    return (
        <SafeAreaView style={styles.containerPai}>
            <View style={styles.containerIcon}>
                <Image source={iconMovie} style={styles.icon}/>
            </View>
            <Text style={styles.title}>Página de login</Text>
            <View style={styles.containerFilho}>
                <AppInput message="Seuemail@email.com"/>
                <AppInput message="Mínimo de 6 caracteres"/>
                <View style={{alignItems: 'flex-end'}}>
                    <AppButton text="Login"/>
                </View>
            </View>
        </SafeAreaView>
    );

};