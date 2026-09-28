import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Navigation } from './src/navigation/MainTabs'

export default function App() {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
}