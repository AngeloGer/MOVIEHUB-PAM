import React from "react";

import { Text, View, TextInput, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppButton, AppInput } from "../../src/components";
import styles from "./styles";

export default function Register() {

    return (
        <SafeAreaView style={styles.containerPai}>
            <Text style={styles.title}>Página de cadastro</Text>
            <View style={styles.containerFilho}>
                <AppInput message="Digite seu nome"/>
                <AppInput message="Seuemail@email.com"/>
                <AppInput message="Mínimo de 6 caracteres"/>
                <AppInput message="Digite sua senha novamente"/>
                <View style={{alignItems: 'flex-end'}}>
                    <AppButton text="Cadastrar"/>
                </View>
            </View>
        </SafeAreaView>
    );

};