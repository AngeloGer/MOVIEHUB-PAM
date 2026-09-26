import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Splash, Login, Register, Home, Movies, MovieCreate } from './src/screens';
import { Navigation } from './src/navigation/MainTabs';

export default function App() {
  return (
    <SafeAreaProvider>
      <Movies />
    </SafeAreaProvider>
  );
}