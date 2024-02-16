import React from "react";
import Navigation from "./Navigation";
import { NativeBaseProvider } from "native-base";
import { ColorSchemeProvider } from './components/ColorSchemeContext';

export default function App() {
  return (
    // Envuelve tu aplicación en el NativeBaseProvider
    <NativeBaseProvider>
      <ColorSchemeProvider>
        <Navigation />
      </ColorSchemeProvider>
    </NativeBaseProvider>
  );
}
