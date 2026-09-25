import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Splash, Login, Register, Home, Movies, MovieCreate } from './screens';
import { Navigation } from './navigation/MainTabs';

export default function App() {
  return (
    <SafeAreaProvider>
      <Movies />
    </SafeAreaProvider>
  );
}