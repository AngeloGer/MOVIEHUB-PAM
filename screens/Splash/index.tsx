import React, { useState } from "react";

import { ActivityIndicator, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import iconMovieHub from "../../assets/icons/MovieHubText.png"
import styles from "../Splash/styles";

interface LoadingIndicatorProp {
    message: string;
};

export default function Splash() {

    const LoadingIndicator = ({ message }: LoadingIndicatorProp) => (
        <View style={styles.containerFilho}>
            <ActivityIndicator size="large" color="#0f91a3" style={styles.indicador}/>
            <Text style={styles.text}>{message}</Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.containerPai}>
            <View style={styles.containerFilho}>
                <Image source={iconMovieHub} style={styles.iconMovie}/>
            </View>
            <LoadingIndicator message={"Carregando..."}/>
        </SafeAreaView>
    );
};